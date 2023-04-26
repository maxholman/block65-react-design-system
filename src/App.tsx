/* eslint-disable import/no-extraneous-dependencies */
import { Link, Route, Router, Routes } from '@block65/mrr';
import type { FC } from 'react';
import {
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  FormattedTime,
  IntlProvider,
} from 'react-intl';
import { useLocalStorageState } from '../lib/hooks/use-localstorage-state.js';
import {
  Block,
  DesignSystem,
  FormInputRadio,
  FormInputRadioGroup,
  Grid,
  Heading,
  Inline,
  interFontThemeClassName,
  Panel,
  TextLink,
  type ColorScheme,
  type ContrastScheme,
  Avatar,
  type FontSize,
} from '../lib/main.js';
import { BadgesPage } from './pages/badges.js';
import { ButtonsPage } from './pages/buttons.js';
import { CalloutPage } from './pages/callout.js';
import { CorePage } from './pages/core.js';
import { DropdownMenuIframe } from './pages/dropdown-menu-iframe.js';
import { DropdownMenuPage } from './pages/dropdown-menu.js';
import { FormsPage } from './pages/forms.js';
import { GridPage } from './pages/grid.js';
import { IconsPage } from './pages/icons.js';
import { LayoutPage } from './pages/layout.js';
import { ListPage } from './pages/list.js';
import { LoadersPage } from './pages/loaders.js';
import { MediaQueryPage } from './pages/media-query.js';
import { ModalPage } from './pages/modal.js';
import { PanelsPage } from './pages/panels.js';
import { TypographyPage } from './pages/typography.js';
import { PatternPage } from './pages/patterns.js';

const fakeNames = [
  ...[
    'Cynthia Smith',
    'Leah Martin',
    'Aiden Rodriguez',
    'Lila Patel',
    'John Gonzalez',
    'Amelia Walker',
    'William Green',
    'Nora Ramirez',
    'Oliver Baker',
    'Aria Thompson',
    'Ethan Davis',
    'Audrey Wilson',
    'Evelyn Lee',
    'Isaac Anderson',
    'Sophie Lewis',
    'Caleb Wright',
    'Lily King',
    'Lucas Hall',
    'Avery Scott',
    'Isabella Nelson',
    'Henry Cooper',
    'Madison Flores',
    'James Perez',
    'Chloe Taylor',
    'Jackson Martinez',
    'Charlotte Edwards',
    'Michael Garcia',
    'Grace Carter',
    'Andrew Moore',
    'Ella Mitchell',
    'David Hernandez',
    'Mia Diaz',
    'Alexander Parker',
    'Lila Thompson',
    'Benjamin Turner',
    'Hannah Stewart',
    'Lucy Evans',
    'William Rodriguez',
    'Sophia Clark',
    'Daniel Phillips',
    'Avery Ramirez',
    'Gabriel Hill',
    'Emily Foster',
    'Christopher Rogers',
    'Arianna Bailey',
    'Nicholas Sanchez',
    'Alyssa Reynolds',
    'Anthony Henderson',
    'Brooklyn Myers',
    'Brandon Perry',
    'Makayla James',
    'Ryan Cox',
    'Natalie Powell',
    'Jonathan Griffin',
    'Eleanor Mitchell',
    'Robert Watson',
    'Olivia Barnes',
    'Matthew Adams',
    'Makayla Campbell',
    'Ethan Hernandez',
    'Jasmine Flores',
    'Christopher Rivera',
    'Zoe Price',
    'Joshua Peterson',
    'Evelyn Ramirez',
    'Charles Nelson',
    'Aubrey Parker',
    'Thomas Ward',
    'Aaliyah Bell',
    'Samuel Wright',
    'Addison Martinez',
    'Dylan Lewis',
    'Sophie Phillips',
    'Nicholas Price',
    'Brianna Collins',
    'Jacob Wood',
    'Emma Stewart',
    'Nicholas Johnson',
    'Samantha Jackson',
    'Lucas Anderson',
    'Mia Jones',
    'Christopher Scott',
    'Abigail Howard',
    'John Cooper',
    'Natalie Green',
    'Isabella Morris',
    'Joseph Collins',
    'Avery Brown',
    'William Howard',
    'Katherine Butler',
    'James Reed',
    'Victoria Ward',
    'Josephine Reyes',
    'Robert Flores',
    'Aubrey Sanders',
    'Edward Ortiz',
    'Lillian Cook',
  ],
  ...[
    'María García',
    'André Silva',
    'Lucía López',
    'César Ortiz',
    'Ana Fernández',
    'Joaquín Hernández',
    'Lorena Pérez',
    'Antônio Souza',
    'Mónica Ramírez',
    'Júlio Silva',
    'Adriana Gómez',
    'Diego Sánchez',
    'Carmen García',
    'Bruno Costa',
    'Aurora Martínez',
    'Fátima Santos',
    'Fernando González',
    'Giselle Duarte',
    'José Ramón Castro',
    'Inês Ferreira',
    'Luisa Herrera',
    'Víctor Torres',
    'João Baptista',
    'Silvia Díaz',
    'Catarina Alves',
    'Cristina Ruiz',
    'Rafaela Fernandes',
    'Rodrigo Vargas',
    'Javier Álvarez',
    'Isabella da Silva',
    'Jorge Hernández',
    'Diana Rodríguez',
    'Álvaro Núñez',
    'Miguel Castro',
    'Marta Sousa',
    'Iván García',
    'Juan Carlos Sánchez',
    'Nathalia Oliveira',
    'Renata Pereira',
    'Santiago Gutiérrez',
    'Alexandre Vieira',
    'Vicente Flores',
    'Raquel Jiménez',
    'Roberto Rosales',
    'Paula Gómez',
    'Carla Campos',
    'David López',
    'Marcela Martínez',
    'Leonardo Mendoza',
    'Pedro Costa',
    'Mireia García',
    'Guilherme Oliveira',
    'Ángela Torres',
    'Eduardo Ribeiro',
    'Aitana Ruiz',
    'Joel Hernández',
    'Mariana Castro',
    'Sara López',
    'Nicolás Gómez',
    'Carolina Silva',
    'Esteban Pérez',
    'Victoria García',
    'Álex Rodríguez',
    'Tatiana Fernández',
    'Rubén Hernández',
    'Bruna Lima',
    'Mateo Ramírez',
    'Valentina Mora',
    'Gustavo Castro',
    'Gabriela Ortiz',
    'Luis Miguel González',
    'Lucas Santos',
    'Melissa Pérez',
    'Francisco Javier López',
    'Vera Fernandes',
    'Alessandro Rossi',
    'Marina Silva',
    'Matías Gómez',
    'Irene García',
    'Hugo Fernández',
    'Ana Beatriz Castro',
    'Miguel Ángel Torres',
    'Lídia Costa',
    'Carlos Sánchez',
    'Sofía Ramírez',
    'João Miguel Almeida',
    'Santiago Castro',
    'Laura Hernández',
    'Mariano Pérez',
    'Clara García',
    'José Paulo Souza',
    'Beatriz Gómez',
  ],
  '𝓐𝓵𝓲𝓬𝓮𝓖',
  '𝐄𝐦𝐢𝐥𝐲𝐖',
  '𝓛𝓲𝓷𝓭𝓪𝓦𝓸𝓷𝓰',
  '𝓜𝓪𝓻𝓲𝓮𝓛',
  '𝑾𝒊𝒍𝒍𝒊𝒂𝒎𝓣',
  '🐱𝓟𝓾𝓻𝓻𝓕𝓮𝓬𝓽𝓐𝓷𝓰𝓮𝓵🐱',
  '𝓝𝓪𝓷𝓬𝔂𝓟',
  '𝓓𝓪𝓿𝓲𝓭𝓛',
  '𝓢𝓪𝓻𝓪𝓱𝓑',
  '𝓔𝓵𝓵𝓪𝓖',
  '𝓜𝓪𝔁𝓦',
  '𝑨𝒍𝒆𝒙𝒂𝒏𝒅𝒓𝒊𝓝',
  '𝓢𝓸𝓹𝓱𝓲𝓮𝓚',
  '𝓗𝓪𝓷𝓷𝓪𝓱𝓡',
  '𝓑𝓻𝓸𝓸𝓴𝓮𝓢',
  '𝓣𝓸𝓶𝓗',
  '𝓝𝓪𝓷𝓬𝔂𝓢',
  '𝑱𝒐𝒓𝒅𝒂𝒏𝓣',
  '🌸𝓓𝓪𝓲𝓼𝔂𝓭𝓪𝔂🌸',
  '𝓚𝓲𝓻𝓪𝓥',
  '𝓜𝓪𝓻𝓽𝓲𝓷𝓖',
  '𝓛𝓾𝓬𝔂𝓓',
  '𝓔𝓶𝓲𝓵𝔂𝓦',
  '𝓐𝓭𝓻𝓲𝓪𝓷𝓪',
  '𝓢𝓪𝓶𝓪𝓷𝓽𝓱𝓪𝓢',
  '𝓒𝓱𝓵𝓸𝓮𝓢',
  '𝓙𝓸𝓷𝓮𝓼𝓢',
  '𝓐𝓵𝓲𝓬𝓮𝓛𝓸𝓸',
  '𝓥𝓮𝓻𝓸𝓷𝓲𝓴𝓪',
  '𝓝𝓲𝓬𝓱𝓸𝓵𝓮𝓚',

  '陳思妤 (Chen Si-Yu)',
  '伊藤悠香 (Ito Yuka)',
  '李明憲 (Li Ming-Xian)',
  '細川美佳 (Hosokawa Mika)',
  '朴有美 (Park You-Mi)',
  '中山佳子 (Nakayama Yoshiko)',
  '郭麗雲 (Guo Li-Yun)',
  '田中真美子 (Tanaka Mamiko)',
  '張家豪 (Zhang Jia-Hao)',
  '林宜慧 (Lin Yi-Hui)',
  '黃宏偉 (Huang Hong-Wei)',
  '王婷婷 (Wang Ting-Ting)',
  '石川直子 (Ishikawa Naoko)',
  '李宜欣 (Li Yi-Xin)',
  '吉田真理子 (Yoshida Mariko)',
  '范佳慧 (Fan Jia-Hui)',
  '黃心怡 (Huang Xin-Yi)',
  '鄭美玲 (Cheng Mei-Ling)',
  '高橋美智子 (Takahashi Michiko)',
  '江美琪 (Jiang Mei-Qi)',
  '陳美鳳 (Chen Mei-Feng)',
  '王俊凱 (Wang Jun-Kai)',
  '小川純奈 (Ogawa Junna)',
  '鄭怡靜 (Cheng Yi-Jing)',
  '江美瑤 (Jiang Mei-Yao)',
  '黃玉婷 (Huang Yu-Ting)',
  '周子瑜 (Chou Tzu-Yu)',
  '林雅淳 (Lin Ya-Chun)',
  '松本裕子 (Matsumoto Hiroko)',
  '許瑋甯 (Hsu Wei-Ning)',
  '吳姵文 (Wu Pei-Wen)',
  '江宏恩 (Jiang Hong-En)',
  '陳昱霖 (Chen Yu-Lin)',
  '岡田准一 (Okada Junichi)',
  '金智媛 (Kim Ji-Won)',
  '高橋光臣 (Takahashi Mitsuomi)',
  '劉芸樺 (Liu Yun-Hua)',
  '江坤仁 (Jiang Kun-Ren)',
  '丁文琪 (Ding Wen-Qi)',
  '郭婷婷 (Guo Ting-Ting)',
  '林智慧 (Lin Zhi-Hui)',
  '尤雅雯 (You Ya-Wen)',
  '黃士修 (Huang Shi-Xiu)',
  '王瑋 (Wang Wei)',
  '洪浩翔 (Hung Hao-Xiang)',
  '韓善花 (Han Sun-Hwa)',
  '曾昱嘉 (Tseng Yu-Chia)',
  '吳宜玲 (Wu Yi-Ling)',
  '廖婉君 (Liao Wan-Jun)',

  'עדי כהן (Adi Cohen)',
  'רוני כהן (Roni Cohen)',
  'דניאל לוי (Daniel Levi)',
  'טלי שרון (Tali Sharon)',
  'רן כהן (Ran Cohen)',
  'מיכאל כהן (Michael Cohen)',
  'שירה אזולאי (Shira Azoulay)',
  'גילי לוי (Gili Levi)',
  'איתי כהן (Itay Cohen)',
  'לירון כהן (Liron Cohen)',
  'גל כהן (Gal Cohen)',
  'עידן כהן (Idan Cohen)',
  'עדן לוי (Eden Levi)',
  'רפאל כהן (Raphael Cohen)',
  'שרון כהן (Sharon Cohen)',
  'דור כהן (Dor Cohen)',
  'מאיה לוי (Maya Levi)',
  'נועם כהן (Noam Cohen)',
  'שחר כהן (Shahar Cohen)',
  'אורן לוי (Oren Levi)',
  'שלומי כהן (Shlomi Cohen)',
  'ארז לוי (Erez Levi)',
  'אורן כהן (Oren Cohen)',
  'עידן שרון (Idan Sharon)',
  'רונן כהן (Ronen Cohen)',
  'אביבה לוי (Aviva Levi)',
  'מורן כהן (Moran Cohen)',
  'נועה לוי (Noa Levi)',
  'דורית כהן (Dorit Cohen)',
  'גיא לוי (Guy Levi)',
  'אלון כהן (Alon Cohen)',
  'עמית לוי (Amit Levi)',
  'ישי כהן (Yishai Cohen)',
  'שחר לוי (Shahar Levi)',
  'אורי כהן (Uri Cohen)',
  'שני לוי (Shani Levi)',
  'איתמר כהן (Itamar Cohen)',
  "נעם לוי (Na'am Levi)",
  'מתן כהן (Matan Cohen)',
  'אורלי לוי (Orly Levi)',
  'מיכל כהן (Michal Cohen)',
  'ירון לוי (Yaron Levi)',
  'שמוליק כהן (Shmulik Cohen)',
  'רעות לוי (Reut Levi)',
  'עמית כהן (Amit Cohen)',
  'דן לוי (Dan Levi)',
  'טל כהן (Tal Cohen)',
  'אסתר לוי (Esther Levi)',

  ...[
    '!!!',
    '~~~',
    '###',
    '@@@',
    '$$$',
    '^^^',
    '&&&',
    '***',
    '---',
    '+++',
    '===',
    '>>>',
    '<<<',
    '???',
    '%%%',
    '|||',
    '///',
    ',,,',
    '...',
    ':::',
    ';;;',
    '&&&',
    '^^^',
    '((((',
    '))))',
    '///',
    '===',
    '~~~',
    '>>>',
    '^^^',
    ')))',
    '!!!',
    '++',
    ':::',
    ',,,',
    '***',
    '///',
    '&&&',
    '===',
    '>>>',
    '|||',
    '###',
    '^^^',
    '***',
    '(((',
    '))))',
    '???',
    ':::',
    ';;;',
    '^^^',
    '!!!',
    '^^^',
    '===',
    '&&&',
    '%%%',
    '>>>',
    '///',
    '+++',
    '___',
    '(((',
    '))))',
    '&&&',
    '~~~',
    '%%%',
    '***',
    ',,,',
    '&&&',
    '===',
    '<<<',
    '///',
    '+++',
    '###',
    '///',
    '%%%',
    '!!!',
    '^^^',
    '((((',
    '))))',
    '>>>',
    '^^^',
    '===',
    '&&&',
    '***',
    '&&&',
    '###',
    '((((',
    '))))',
    '%%%',
    '///',
    '###',
    '^^^',
    '+++',
    '///',
    '###',
    '===',
    '%%%',
    '&&&',
    '^^^',
    '!!!',
    '===',
    '%%%',
    '###',
    '^^^',
    '((((',
    '))))',
    '===',
    '%%%',
    '///',
    '###',
    '((((',
    '))))',
    '^^^',
    '%%%',
  ],

  '🤔',
  '👀',
  '👍',
  '😂',
  '🤩',
  '🥰',
  '😘',
  '😉',
  '😍',
  '🤪',
  '🤯',
  '😱',
  '🥶',
  '🤬',
  '👋',
  '🤝',
  '🙌',
  '🎉',
  '🎂',
  '🎁',

  '🌞☁️',
  '🌧️☔',
  '🌨️❄️',
  '🌊🏄‍♂️',
  '🌲🌳',
  '🌺🌻',
  '🍔🍟',
  '🍕🍺',
  '🍣🍱',
  '🍩🍫',
  '🎸🎤',
  '🎮🕹️',
  '🎭🎬',
  '🎨🖌️',
  '🎵🎶',
  '🎼🎹',
  '🚀🌠',
  '🚑🚒',
  '🚗🚕',
  '🚲🚴‍♀️',

  '🤖🧠',
  '👨‍👩‍👧‍👦🏡',
  '📚📖',
  '💼📱',
  '👨‍👩‍👧‍👦🎢',
  '🎥🎞️',
  '🎭🎬',
  '🎵🎶',
  '🌊🐠',
  '🚂🚆',
  '🚗🚙',
  '🐶🐾',
  '🐱🐾',
  '🦁🐾',
  '🐻🐾',
  '🐮🥛',
  '🐑🧺',
  '🦜🌴',
  '🦖🦕',
  '🎃👻',

  '💡🤯🧠',
  '🚀🪐👽',
  '🐕🏠🦴',
  '🚴‍♀️🏞️🚴‍♂️',
  '👩‍👩‍👦🏡❤️',
  '🍔🍟🥤',
  '🍕🍺🍕',
  '🌈🦄🌈',
  '🌺🌻🌷',
  '🎸🎤🎶',
  '🎮🕹️🎬',
  '🎨🖌️🎭',
  '🎭🎬🎥',
  '🎵🎶🎹',
  '🚀🌠🪐',
  '🚑🚒🚨',
  '🚗🚕🛣️',

  'lorem.ipsum@gmail.example.com',
  'dolor.sit@outlook.example.com',
  'amet.consectetur@yahoo.example.com',
  'adipiscing.elit@hotmail.example.com',
  'sed.do@icloud.example.com',
  'eiusmod.tempor@live.example.com',
  'incididunt.ut@protonmail.example.com',
  'labore.et@ymail.example.com',
  'magna.aliqua@icloud.example.com',
  'enim.ad@outlook.example.com',
  'veniam.quis@live.example.com',
  'nostrud.exercitation@protonmail.example.com',
  'ullamco.laboris@yahoo.example.com',
  'nisi.ut@outlook.example.com',
  'exercitation.ullamco@live.example.com',
  'aliquip.ex@icloud.example.com',
  'consequat.duis@gmail.example.com',
  'velit.esse@ymail.example.com',
  'cillum.dolore@protonmail.example.com',
  'fugiat.nulla@yahoo.example.com',
  'commodo.consequat@outlook.example.com',
  'duis.aute@live.example.com',
  'in.reprehenderit@icloud.example.com',
  'voluptate.velit@protonmail.example.com',
  'esse.cillum@ymail.example.com',
  'eu.fugiat@outlook.example.com',
  'nulla.pariatur@live.example.com',
  'excepteur.sint@cmail.example.com',
  'sunt.in.culpa@icloud.example.com',
  'qui.officia@protonmail.example.com',
  'deserunt.mollit@yahoo.example.com',
  'anim.id@outlook.example.com',
  'est.laborum@live.example.com',
  'sed.ut@icloud.example.com',
  'amet,.consectetur@ymail.example.com',
  'adipiscing.elit@protonmail.example.com',
  'dolor.sit@outlook.example.com',
  'non.numquam@icloud.example.com',
  'eiusmod.tempor@ymail.example.com',
  'incididunt.ut@protonmail.example.com',
  'labore.et@dmail.example.com',
  'magna.aliqua@outlook.example.com',
  'enim.ad@live.example.com',
  'veniam.quis@icloud.example.com',
  'nostrud.exercitation@ymail.example.com',
  'ullamco.laboris@protonmail.example.com',
  'nisi.ut@outlook.example.com',
  'exercitation.ullamco@live.example.com',
  'aliquip.ex@icloud.example.com',
  'consequat.duis@gmail.example.com',
  'velit.esse@outlook.example.com',
  'cillum.dolore@live.example.com',
  'fugiat.nulla@ymail.example.com',
  'commodo.consequat@protonmail.example.com',
  'duis.aute@outlook.example.com',
  'in.reprehenderit@live.example.com',
  'voluptate.velit@icloud.example.com',
  'esse.cillum@ymail.example.com',
  'eu.fugiat@protonmail.example.com',
  'nulla.pariatur@outlook.example.com',
  'excepteur.sint@live.example.com',
  'sunt.in.culpa@icloud.example.com',
  'qui.officia@ymail.example.com',
  'deserunt.mollit@protonmail.example.com',
  'anim.id@outlook.example.com',
  'est.laborum@live.example.com',
  'sed.ut@icloud.example.com',
  'amet.consectetur@ymail.example.com',
  'adipiscing.elit@protonmail.example.com',
  'dolor.sit@outlook.example.com',
  'non.numquam@live.example.com',
  'eiusmod.tempor@icloud.example.com',
];

export const App: FC = () => {
  const [colorScheme, setColorScheme] = useLocalStorageState<ColorScheme>(
    'color-scheme',
    'auto',
  );
  const [contrastScheme, setContrastScheme] =
    useLocalStorageState<ContrastScheme>('contrast-scheme', 'auto');

  return (
    <IntlProvider locale="en">
      <DesignSystem
        colorScheme={colorScheme}
        contrastScheme={contrastScheme}
        className={[interFontThemeClassName]}
        stringLikeComponents={[
          FormattedMessage,
          FormattedNumber,
          FormattedTime,
          FormattedDate,
        ]}
      >
        <Router>
          <Routes>
            <Route path="/dropdown-menu-iframe">
              <DropdownMenuIframe />
            </Route>
            <Route>
              <Block style={{ minHeight: '100vh' }} flexGrow>
                <Block padding="5" flexGrow>
                  <Grid
                    cols={{
                      all: 2,
                      mobile: 1,
                    }}
                  >
                    <FormInputRadioGroup name="color-scheme">
                      <Heading level="4" textOverflow="ellipsis">
                        Color Scheme
                      </Heading>
                      <FormInputRadio
                        // inline
                        label="auto"
                        checked={!colorScheme || colorScheme === 'auto'}
                        onChange={() => setColorScheme('auto')}
                      />
                      <FormInputRadio
                        // inline
                        label="force light mode"
                        checked={colorScheme === 'light'}
                        onChange={() => setColorScheme('light')}
                      />
                      <FormInputRadio
                        // inline
                        label="force dark mode"
                        checked={colorScheme === 'dark'}
                        onChange={() => setColorScheme('dark')}
                      />
                    </FormInputRadioGroup>

                    <FormInputRadioGroup name="contrast-scheme">
                      <Heading level="3" textOverflow="ellipsis">
                        Contrast Scheme
                      </Heading>
                      <FormInputRadio
                        // inline
                        label="auto"
                        checked={!contrastScheme || contrastScheme === 'auto'}
                        onChange={() => setContrastScheme('auto')}
                      />
                      <FormInputRadio
                        // inline
                        label="force less contrast"
                        checked={contrastScheme === 'less'}
                        onChange={() => setContrastScheme('less')}
                      />
                      <FormInputRadio
                        // inline
                        label="force more contrast"
                        checked={contrastScheme === 'more'}
                        onChange={() => setContrastScheme('more')}
                      />
                    </FormInputRadioGroup>
                  </Grid>

                  <Panel variant="ghost">
                    <Inline
                      justifySelf="center"
                      space="5"
                      flexWrap
                      justifyContent="center"
                    >
                      <Link href="/">
                        <TextLink>Home</TextLink>
                      </Link>
                      <Link href="/core">
                        <TextLink>Core</TextLink>
                      </Link>
                      <Link href="/layout">
                        <TextLink>Layout</TextLink>
                      </Link>
                      <Link href="/panels">
                        <TextLink>Panels</TextLink>
                      </Link>
                      <Link href="/grid">
                        <TextLink>Grid</TextLink>
                      </Link>
                      <Link href="/forms">
                        <TextLink>Forms</TextLink>
                      </Link>
                      <Link href="/typography">
                        <TextLink>Typography</TextLink>
                      </Link>
                      <Link href="/buttons">
                        <TextLink>Buttons</TextLink>
                      </Link>
                      <Link href="/list">
                        <TextLink>List</TextLink>
                      </Link>
                      <Link href="/badges">
                        <TextLink>Badges</TextLink>
                      </Link>
                      <Link href="/loaders">
                        <TextLink>Loaders</TextLink>
                      </Link>
                      <Link href="/callout">
                        <TextLink>Callout</TextLink>
                      </Link>
                      <Link href="/media-query">
                        <TextLink>Media Query</TextLink>
                      </Link>
                      <Link href="/modals">
                        <TextLink>Modals</TextLink>
                      </Link>
                      <Link href="/icons">
                        <TextLink>Icons</TextLink>
                      </Link>
                      <Link href="/dropdown-menu">
                        <TextLink>Dropdowns</TextLink>
                      </Link>
                      <Link href="/patterns">
                        <TextLink>Patterns</TextLink>
                      </Link>
                    </Inline>
                  </Panel>
                  <Block flexGrow>
                    <Routes>
                      <Route path="/">
                        <Panel variant="ghost">
                          <Grid cols={5} space="15">
                            {Array.from(fakeNames, (name, idx) => {
                              const fontSize = (
                                (idx % 6) +
                                1
                              ).toString() as FontSize;
                              return (
                                <Avatar
                                  ident={name}
                                  name={name}
                                  size={fontSize}
                                />
                              );
                            })}
                          </Grid>
                        </Panel>
                      </Route>
                      <Route path="/core">
                        <CorePage />
                      </Route>
                      <Route path="/layout">
                        <LayoutPage />
                      </Route>
                      <Route path="/panels">
                        <PanelsPage />
                      </Route>
                      <Route path="/grid">
                        <GridPage />
                      </Route>
                      <Route path="/forms">
                        <FormsPage />
                      </Route>
                      <Route path="/typography">
                        <TypographyPage />
                      </Route>
                      <Route path="/buttons">
                        <ButtonsPage />
                      </Route>
                      <Route path="/list">
                        <ListPage />
                      </Route>
                      <Route path="/badges">
                        <BadgesPage />
                      </Route>
                      <Route path="/loaders">
                        <LoadersPage />
                      </Route>
                      <Route path="/callout">
                        <CalloutPage />
                      </Route>
                      <Route path="/media-query">
                        <MediaQueryPage />
                      </Route>
                      <Route path="/modals">
                        <ModalPage />
                      </Route>
                      <Route path="/icons">
                        <IconsPage />
                      </Route>
                      <Route path="/dropdown-menu">
                        <DropdownMenuPage />
                      </Route>
                      <Route path="/patterns">
                        <PatternPage />
                      </Route>
                      <Route>
                        <Heading>404</Heading>
                      </Route>
                    </Routes>
                  </Block>
                </Block>
              </Block>
            </Route>
          </Routes>
        </Router>
      </DesignSystem>
    </IntlProvider>
  );
};
