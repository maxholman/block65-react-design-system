import { size } from '@floating-ui/dom';
import {
  FloatingFocusManager,
  FloatingNode,
  FloatingPortal,
  FloatingTree,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
  type Placement,
} from '@floating-ui/react';
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type FC,
  type ForwardedRef,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
  type Ref,
} from 'react';
import { Button, type ButtonProps } from './button.js';
import { DesignSystem } from './design-system.js';
import { useDesignSystem } from './hooks/use-design-system.js';
import { ArrowForward, MenuDropdownArrowIcon } from './icons.js';
import { Flex, type FlexProps } from './layout.js';
import type { Merge, ReactHTMLElementsHacked } from './types.js';

const defaultMenuDropdownProps = {
  space: '4',
  padding: '0',
  flexDirection: 'column',
} satisfies FlexProps;

export type MenuButtonFallbackProps = Omit<MenuProps, 'fallback'>;

type MenuCommonProps<T extends keyof ReactHTMLElementsHacked> =
  PropsWithChildren<{
    initialPlacement?: Placement;
    onOpenChange?: (isOpen: boolean) => void;
    menuDropdownProps?: FlexProps<T>;
    nested?: boolean;
    fallback?: ReactElement;
    activator?: FC<MenuActivatorProps>;
    label?: ReactNode;
  }>;

export type MenuProps = Merge<
  Omit<ButtonProps<'div'>, 'component'>,
  MenuCommonProps<'div'>
>;

export type MenuActivatorProps = PropsWithChildren<
  Omit<ButtonProps<'div'>, 'onClick'> & { isNested?: boolean }
>;

const DefaultMenuActivator = forwardRef(
  (
    { isNested, ...props }: MenuActivatorProps,
    forwardedRef: ForwardedRef<HTMLDivElement>,
  ) => (
    <Button
      component="div"
      iconEnd={<MenuDropdownArrowIcon />}
      ref={forwardedRef}
      icon={isNested && <ArrowForward />}
      {...(isNested && {
        // Indicates this is a nested <Menu /> acting as a <MenuItem />.
        role: 'menuitem',
      })}
      // className: `${isNested ? 'MenuItem' : 'RootMenu'}`,
      {...props}
    />
  ),
);

const MenuInner = forwardRef(
  (
    {
      initialPlacement = 'bottom-start',
      children,
      label,
      onOpenChange,
      menuDropdownProps,
      activator,
      className,
      ...props
    }: MenuProps,
    forwardedRef: Ref<HTMLDivElement>,
  ) => {
    const ds = useDesignSystem();

    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [allowHover, setAllowHover] = useState(false);

    const listItemsRef = useRef<Array<HTMLButtonElement | null>>([]);
    const listContentRef = useRef(
      Children.map(children, (child): string | null =>
        isValidElement(child) &&
        'label' in child.props &&
        typeof child.props.label === 'string'
          ? child.props.label
          : null,
      ) || [],
    );

    const openChange = useCallback(
      (o: boolean) => {
        onOpenChange?.(o);
        setIsOpen(o);
      },
      [onOpenChange],
    );

    const tree = useFloatingTree();
    const nodeId = useFloatingNodeId();
    const parentId = useFloatingParentNodeId();
    const isNested = parentId != null;

    const { x, y, strategy, refs, context } = useFloating<HTMLElement>({
      nodeId,
      open: isOpen,
      onOpenChange: openChange,
      placement: isNested ? 'right-start' : initialPlacement,
      whileElementsMounted: autoUpdate,

      middleware: [
        offset({
          mainAxis: isNested ? 0 : 4,
          alignmentAxis: isNested ? -4 : 0,
        }),
        flip(),
        shift(),

        // NOTE: The 'bestFit' fallback strategy in the flip() middleware is
        // the default, which ensures the best fitting placement is used. In this
        // scenario, place size() after flip():
        size({
          apply({ rects, availableWidth, availableHeight, elements }) {
            Object.assign(elements.floating.style, {
              minWidth: `${rects.reference.width}px`,
              maxWidth: `${availableWidth}px`,
              maxHeight: `${availableHeight}px`,
            });
          },
        }),
      ],
    });

    const hover = useHover(context, {
      enabled: isNested && allowHover,
      delay: { open: 75 },
      restMs: 25,
      handleClose: safePolygon({
        blockPointerEvents: true,
      }),
    });

    const click = useClick(context, {
      event: 'mousedown',
      toggle: !isNested || !allowHover,
      ignoreMouse: isNested,
    });

    const role = useRole(context, { role: 'menu' });
    const dismiss = useDismiss(context);

    const listNavigation = useListNavigation(context, {
      listRef: listItemsRef,
      activeIndex,
      nested: isNested,
      onNavigate: setActiveIndex,
    });

    const typeahead = useTypeahead(context, {
      enabled: isOpen,
      listRef: listContentRef,
      activeIndex,
      ...(isOpen && { onMatch: setActiveIndex }),
    });

    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([hover, click, role, dismiss, listNavigation, typeahead]);

    // Event emitter allows you to communicate across tree components.
    // This effect closes all menus when an item gets clicked anywhere
    // in the tree.
    useEffect(() => {
      if (!tree) {
        return () => {};
      }

      function handleTreeClick() {
        setIsOpen(false);
      }

      function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
        if (event.nodeId !== nodeId && event.parentId === parentId) {
          setIsOpen(false);
        }
      }

      tree.events.on('click', handleTreeClick);
      tree.events.on('menuopen', onSubMenuOpen);

      return () => {
        tree.events.off('click', handleTreeClick);
        tree.events.off('menuopen', onSubMenuOpen);
      };
    }, [tree, nodeId, parentId]);

    useEffect(() => {
      if (isOpen && tree) {
        tree.events.emit('menuopen', { parentId, nodeId });
      }
    }, [tree, isOpen, nodeId, parentId]);

    // Determine if "hover" logic can run based on the modality of input. This
    // prevents unwanted focus synchronization as menus open and close with
    // keyboard navigation and the cursor is resting on the menu.
    useEffect(() => {
      function onPointerMove({ pointerType }: PointerEvent) {
        if (pointerType !== 'touch') {
          setAllowHover(true);
        }
      }

      function onKeyDown() {
        setAllowHover(false);
      }

      window.addEventListener('pointermove', onPointerMove, {
        once: true,
        capture: true,
      });

      window.addEventListener('keydown', onKeyDown, true);

      return () => {
        window.removeEventListener('pointermove', onPointerMove, {
          capture: true,
        });
        window.removeEventListener('keydown', onKeyDown, true);
      };
    }, [allowHover]);

    const referenceRef = useMergeRefs([refs.setReference, forwardedRef]);

    const activatorProps: MenuActivatorProps = {
      className,
      ...getReferenceProps({
        ...props,
        onClick(e) {
          e.stopPropagation();
        },
      }),
      children: label,
    };

    return (
      <FloatingNode id={nodeId}>
        {activator ? (
          <Flex ref={referenceRef} {...activatorProps}>
            {activator({ isNested })}
          </Flex>
        ) : (
          <DefaultMenuActivator ref={referenceRef} {...activatorProps} />
        )}

        <FloatingPortal>
          <DesignSystem {...ds}>
            {isOpen && (
              <FloatingFocusManager
                context={context}
                // Prevent outside content interference.
                modal={false}
                // Only initially focus the root floating menu.
                initialFocus={isNested ? -1 : 0}
                // Only return focus to the root menu's reference when menus close.
                returnFocus={!isNested}
              >
                <Flex
                  ref={refs.setFloating}
                  style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                    // width: 'max-content',
                  }}
                  {...getFloatingProps()}
                  {...defaultMenuDropdownProps}
                  {...menuDropdownProps}
                >
                  {Children.map(
                    children,
                    (child, index) =>
                      isValidElement(child) &&
                      cloneElement(
                        child,
                        getItemProps({
                          tabIndex: activeIndex === index ? 0 : -1,
                          ref(node: HTMLButtonElement) {
                            listItemsRef.current[index] = node;
                          },
                          onClick(event) {
                            child.props.onClick?.(event);
                            tree?.events.emit('click');
                          },
                          // Allow focus synchronization if the cursor did not move.
                          onMouseEnter() {
                            if (allowHover && isOpen) {
                              setActiveIndex(index);
                            }
                          },
                        }),
                      ),
                  )}
                </Flex>
              </FloatingFocusManager>
            )}
          </DesignSystem>
        </FloatingPortal>
      </FloatingNode>
    );
  },
);

const Menu = forwardRef(
  (props: MenuProps, forwardedRef: Ref<HTMLDivElement>) => {
    const parentId = useFloatingParentNodeId();

    if (parentId === null) {
      return (
        <FloatingTree>
          <MenuInner {...props} ref={forwardedRef} />
        </FloatingTree>
      );
    }

    return <MenuInner {...props} ref={forwardedRef} />;
  },
);

export default Menu;
