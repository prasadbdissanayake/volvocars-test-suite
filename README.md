# WebDriverIO Test Suite for Volvo Cars Safety Page

This repository contains an automated test suite using WebDriverIO to perform end-to-end testing on the Volvo Cars Safety Page.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Dockerization](#dockerization)
- [Running the Tests](#running-the-tests)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following tools installed:

- Node.js
- npm (Node Package Manager)
- Docker (for Dockerization)

### Installation

Install project dependencies:

```bash
npm install
```

## Configuration

The test suite can be configured by modifying the **wdio.conf.js** file. This configuration includes settings for parallel execution, reporters, services, and other options. Refer to the official WebDriverIO documentation for detailed configuration options.

## Dockerization

The test suite can be containerized using Docker. Here's how to build and run the Docker image:

1. Build the Docker image:

```bash
docker build -t volvocars-test-suite .
```

2. Run the Docker container:

```bash
docker run -d --name volvocars-test-suite volvocars-test-suite
```

## Running the Tests

The test are executing the chrome web browser v115.0.0 or the latest. To run the test suite, use the following command.

```bash
npm test
```

The tests will be executed using WebDriverIO against the specified URL.

> **_NOTE:_**
Due the 'chromedrive' issue, the visual test might not be success and then html version of the reports will not be generated.
Therefore the visual tests at the 'tests\test.spec.js' file from line 54 to 84 comment out. By uncommenting will be able to execute visual tests as well.

## Test Reports

The test reports can be found in the reports folder in the source and you may see the html version of the report as well.
