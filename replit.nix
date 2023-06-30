{ pkgs }: {
  deps = [
    pkgs.nodejs-20_x
    pkgs.nodePackages.vscode-css-languageserver-bin
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server

  ];
}