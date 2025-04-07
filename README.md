# 🚀 Projeto de Testes com Cypress

Este projeto utiliza [Cypress](https://www.cypress.io/) para testes E2E (end-to-end) e segue uma configuração com ambiente virtual usando **NVM (Node Version Manager)** para garantir compatibilidade entre diferentes máquinas.

---

## 📦 Pré-requisitos

- [Git](https://git-scm.com/)
- [Node Version Manager para Windows (nvm-windows)](https://github.com/coreybutler/nvm-windows/releases)
- [Node.js](https://nodejs.org/) (gerenciado via NVM)
- [NPM](https://www.npmjs.com/) (instalado junto com Node)

---

## ⚙️ Configuração do Ambiente

### 1. 📥 Instalar o NVM para Windows

1. Acesse: [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)
2. Baixe o arquivo `nvm-setup.exe`
3. Instale normalmente (mantenha os caminhos padrão)

Depois da instalação, feche e reabra o terminal (CMD, PowerShell ou Git Bash) e teste:

```bash
nvm version
```

---

### 2. 🔧 Usar o `.nvmrc` para configurar a versão do Node

Este projeto usa a seguinte versão do Node:

```
18.19.0
```

#### Para instalar e usar essa versão:

```bash
nvm install 18.19.0
nvm use 18.19.0
```

> ⚠️ O comando `nvm use` **não lê o `.nvmrc` automaticamente no Windows**, então você precisa informar a versão manualmente (ou usar um script — veja abaixo).

#### ✅ Verificar se está usando a versão correta:

```bash
node -v
# Deve retornar: v18.19.0
```

---

### 3. ⚙️ Instalar as dependências (incluindo Cypress)

Depois de ativar o Node:

```bash
npm install
```

Isso instalará o **Cypress** (versão declarada no `package.json`) e todas as dependências do projeto.

---

### 💡 Caso queira instalar o Cypress manualmente

Se você estiver começando do zero ou removendo o `node_modules`, instale com:

```bash
npm install cypress --save-dev
```

---

### 4. (Opcional) Script para carregar a versão do Node via `.nvmrc`

No Windows, crie um script chamado `use-node.bat` com:

```bat
@echo off
set /p version=<.nvmrc
nvm use %version%
```

Rode com:

```bash
./use-node.bat
```

---

## 🧪 Rodando os Testes

### Interface visual do Cypress

```bash
npx cypress open
```

### Modo headless (terminal)

```bash
npx cypress run
```

---

## 🗂 Estrutura Sugerida do Projeto

```bash
cypress/
├── e2e/
│   ├── web/           # Testes de interface
│   └── api/          # Testes de API
├── fixtures/         # Mocks e dados de teste
├── support/          # Configuração e comandos customizados
.cypress.config.js    # Configuração do Cypress
.nvmrc                # Versão do Node usada
use-node.bat          # Script para NVM no Windows
package.json
```

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
