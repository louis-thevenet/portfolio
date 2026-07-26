# Portfolio

## Deploy on NixOS

Add the repo's flake to your inputs:

```nix
inputs.portfolio = {
  url = "github:louis-thevenet/portfolio";
  inputs.nixpkgs.follows = "nixpkgs";
};
```

Deploy the website with NGINX:

```nix
let
  system = pkgs.stdenv.hostPlatform.system;
  portfolioSite = inputs.portfolio.packages.${system}.default;
  url = "your.website.com";
in
{
  services.nginx = {
    enable = true;
    virtualHosts.${url} = {
      root = "${portfolioSite}";
      enableACME = true;
      forceSSL = true;
    };
  };
}
```
