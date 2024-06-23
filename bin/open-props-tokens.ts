/* eslint-disable no-restricted-syntax */
import { camelCase } from 'change-case';
import tokens from 'open-props/open-props.tokens.json' with { type: 'json' };
import { Project, VariableDeclarationKind } from 'ts-morph';

const project = new Project();
const sourceFile = project.createSourceFile('.fake.ts');

// so that blue1 comes before blue10
const collator = new Intl.Collator([], { numeric: true });

const groupedTokens = Object.groupBy(Object.entries(tokens), ([, token]) =>
  '$type' in token ? token.$type : 'other',
);

for (const [group, tokenGroup] of Object.entries(groupedTokens)) {
  sourceFile.addStatements(['', `// ${group}`]);

  if (tokenGroup) {
    tokenGroup.sort(([a], [b]) => collator.compare(a, b));

    for (const [cssVarName, token] of tokenGroup) {
      sourceFile.addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        isExported: true,
        declarations: [
          {
            name: camelCase(cssVarName, {
              mergeAmbiguousCharacters: true,
            }),
            initializer: JSON.stringify(
              typeof token.$value === 'string'
                ? token.$value.trim()
                : token.$value,
              null,
              2,
            ),
          },
        ],
      });
    }
  }
}

process.stdout.write(`${sourceFile.getFullText()}\n`);
