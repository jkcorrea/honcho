oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g honcho-cli
$ honcho COMMAND
running command...
$ honcho (--version)
honcho-cli/0.0.0 darwin-arm64 node-v18.12.1
$ honcho --help [COMMAND]
USAGE
  $ honcho COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`honcho hello PERSON`](#honcho-hello-person)
* [`honcho hello world`](#honcho-hello-world)
* [`honcho help [COMMAND]`](#honcho-help-command)
* [`honcho plugins`](#honcho-plugins)
* [`honcho plugins:install PLUGIN...`](#honcho-pluginsinstall-plugin)
* [`honcho plugins:inspect PLUGIN...`](#honcho-pluginsinspect-plugin)
* [`honcho plugins:install PLUGIN...`](#honcho-pluginsinstall-plugin-1)
* [`honcho plugins:link PLUGIN`](#honcho-pluginslink-plugin)
* [`honcho plugins:uninstall PLUGIN...`](#honcho-pluginsuninstall-plugin)
* [`honcho plugins:uninstall PLUGIN...`](#honcho-pluginsuninstall-plugin-1)
* [`honcho plugins:uninstall PLUGIN...`](#honcho-pluginsuninstall-plugin-2)
* [`honcho plugins update`](#honcho-plugins-update)

## `honcho hello PERSON`

Say hello

```
USAGE
  $ honcho hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/jkcorrea/honcho/blob/v0.0.0/dist/commands/hello/index.ts)_

## `honcho hello world`

Say hello world

```
USAGE
  $ honcho hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ honcho hello world
  hello world! (./src/commands/hello/world.ts)
```

## `honcho help [COMMAND]`

Display help for honcho.

```
USAGE
  $ honcho help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for honcho.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_

## `honcho plugins`

List installed plugins.

```
USAGE
  $ honcho plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ honcho plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/index.ts)_

## `honcho plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ honcho plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ honcho plugins add

EXAMPLES
  $ honcho plugins:install myplugin 

  $ honcho plugins:install https://github.com/someuser/someplugin

  $ honcho plugins:install someuser/someplugin
```

## `honcho plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ honcho plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ honcho plugins:inspect myplugin
```

## `honcho plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ honcho plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ honcho plugins add

EXAMPLES
  $ honcho plugins:install myplugin 

  $ honcho plugins:install https://github.com/someuser/someplugin

  $ honcho plugins:install someuser/someplugin
```

## `honcho plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ honcho plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ honcho plugins:link myplugin
```

## `honcho plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ honcho plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ honcho plugins unlink
  $ honcho plugins remove
```

## `honcho plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ honcho plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ honcho plugins unlink
  $ honcho plugins remove
```

## `honcho plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ honcho plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ honcho plugins unlink
  $ honcho plugins remove
```

## `honcho plugins update`

Update installed plugins.

```
USAGE
  $ honcho plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
