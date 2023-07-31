Что нужно сделать:

1. Если у вас Windows (не Ryzen):
   1. Включить виртуализацию через BIOS
   2. Установить WSL [по видео](https://youtu.be/Hd7FOpxF9fo)
   3. Установить расширение в VSCode (WSL)
2. Проверить, что настроен git и подключен ключ SSH в GitHub
3. Установить nvm по инструкции из презы или по документации https://github.com/nvm-sh/nvm#installing-and-updating
   1. Установить 18 или 20 nodeJs (`nvm install 20`)
4. В VSCode:
   1. Отключить расширение Prettier
   2. Настроить ESLint: форматированние по сохранению
      1. открыть Ctrl+Shift+P -> settings.json -> User settings
      2. Вставить настройку
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
}
```
1. В каждом проекте:
   1. `npm init -y`
   2. `npx eslint --init`
   3. `git init`
   4. `npx create-gitignore node` или `npx gitignore node`
   5. добавить `start` скрипт в `package.json`