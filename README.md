# WebDriverIO Test Suite for Volvo Cars Safety Page

This repository contains an automated test suite using WebDriverIO to perform end-to-end testing on the Volvo Cars Safety Page.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Configuration](#configuration)
- [Dockerization](#dockerization)

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

## Running the Tests

To run the test suite, use the following command:

```bash
npm test
```

The tests will be executed using WebDriverIO against the specified URL.

## Configuration

The test suite can be configured by modifying the **wdio.conf.js** file. This configuration includes settings for parallel execution, reporters, services, and other options. Refer to the official WebDriverIO documentation for detailed configuration options.

## Dockerization

The test suite can be containerized using Docker. Here's how to build and run the Docker image:

1. Build the Docker image:

```bash
docker build -t webdriverio-test-suite .
```

2. Run the Docker container:

```bash
docker run -it --rm webdriverio-test-suite
```
