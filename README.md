# Allure 3 Demo

See Allure 3 in action: <https://allure-framework.github.io/allure3-demo/>

Here you can see reports created by its different plugins:

- **plugin-awesome**
  - **[All tests in a single report](https://allure-framework.github.io/allure3-demo/awesomeAll/)**
  - **[E2E tests](https://allure-framework.github.io/allure3-demo/awesomeE2E/)**
  - **[Unit tests](https://allure-framework.github.io/allure3-demo/awesomeUnit/)**
  - **[BDD tests](https://allure-framework.github.io/allure3-demo/awesomeBDD/)**
- **[plugin-dashboard](https://allure-framework.github.io/allure3-demo/dashboard/)**
- **[plugin-allure2](https://allure-framework.github.io/allure3-demo/allure2/)**
- **[plugin-classic](https://allure-framework.github.io/allure3-demo/classic/#behaviors)**


## Try out locally


### Prerequisites
- Node.js
- pnpm

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/allure-framework/allure3-demo.git
cd allure3-demo

# 2. Install dependencies
pnpm install
pnpm exec playwright install

# 3. Run tests (generates test results)
pnpm exec allure run -- pnpm test

# 4. Open the report in your browser
pnpm exec allure open
```

### What Gets Generated

After running the commands above, you'll find:
- **Test results** in `./allure-results/` (raw JSON data)
- **HTML reports** in `./allure-report/` with multiple views:
  - `awesomeAll/` - All tests combined
  - `awesomeAllure2/` - Allure 3 style from Allure 2 results
  - `awesomeE2E/` - E2E tests only
  - `awesomeUnit/` - Unit tests only
  - `awesomeBDD/` - BDD-style view
  - `dashboard/` - Dashboard overview
  - `allure2/` - Classic Allure 2 style
  - `classic/` - Classic Allure style
  - `csv/` - CSV report

### Where's the Config

The configuration of Allure Report 3 and its plugins for this project is in [allurerc.mjs](./allurerc.mjs). You can play around with it to explore Allure's capabilities.

## Learn More

[Allure 3 Documentation](https://allurereport.org/docs/v3/)
