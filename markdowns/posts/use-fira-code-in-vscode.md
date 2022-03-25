---
title: Use Fira Code in VSCode
subtitle: Fira Code is a monospaced font that is easier to code with.
createdBy: Jimmy Lin
createdAt: 2021-09-21 14:23
---

# Use Fira Code in VSCode

[Fira Code](https://github.com/tonsky/FiraCode) is a monospaced font that is easier to code with.

To use it with VSCode, you need to:

1. Install the font.

   To install it, I recommend to install it with [homebrew](https://brew.sh/),

   ```bash
   brew tap homebrew/cask-fonts
   brew install --cask font-fira-code
   ```

   or, with [chocolatey](https://chocolatey.org/) if you are on Windows.

   ```cmd
   choco install firacode
   ```

2. After installing it, you should probably reboot to get the font loaded.

3. Configure your VSCode settings.

   ```json
   {
     "editor.fontFamily": "Fira Code"
   }
   ```

   Optionally, you may want to enable "font ligatures".

   This case, you should do:

   ```json
   {
     "editor.fontFamily": "Fira Code",
     "editor.fontLigatures": true
   }
   ```

4. Done! Enjoy your new font with VSCode.
