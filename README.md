# Fluxuate

A modern Rails application built with Ruby on Rails 7.1, PostgreSQL, and TailwindCSS.

## 🚀 Features

- Ruby on Rails 7.1 with modern development practices
- PostgreSQL database
- TailwindCSS for styling
- Hotwire (Turbo & Stimulus) for dynamic interactions
- Docker support for development and deployment
- Import maps for JavaScript management

## 📋 Prerequisites

- Ruby 3.3.4
- PostgreSQL
- Node.js & npm
- Docker (optional)

## 🛠 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/leefaus/fluxuate.git
   cd fluxuate
   ```

2. Install dependencies:
   ```bash
   bundle install
   npm install
   ```

3. Database setup:
   ```bash
   rails db:create
   rails db:migrate
   ```

## 🚀 Running the Application

### Local Development

1. Start the Rails server:
   ```bash
   ./bin/dev
   ```

2. Visit http://localhost:3000 in your browser

### Using Docker

1. Build the Docker image:
   ```bash
   docker build -t fluxuate .
   ```

2. Run the container:
   ```bash
   docker compose up
   ```

## 🧪 Testing

Run the test suite:
```bash
rails test
```

## 📦 Dependencies

- Ruby on Rails 7.1.5
- PostgreSQL
- Puma web server
- TailwindCSS
- Hotwire (Turbo & Stimulus)
- Import maps for JavaScript management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ✨ Acknowledgments

- Built with Ruby on Rails
- Styled with TailwindCSS
- Powered by PostgreSQL
