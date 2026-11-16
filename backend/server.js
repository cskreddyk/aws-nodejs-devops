
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";

// Middleware
app.use(express.json());

// Home API
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Employee Management API",
    status: "running"
  });
});

// Health check API
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "employee-management"
  });
});

// Sample employee data (temporary)
const employees = [
  {
    id: 1,
    name: "Rahul",
    department: "DevOps"
  },
  {
    id: 2,
    name: "Priya",
    department: "Cloud"
  }
];

// Get all employees
app.get("/api/employees", (req, res) => {
  res.status(200).json(employees);
});

// Start server only when executed directly
if (require.main === module) {
  app.listen(PORT, HOST, () => {
    console.log(
      `Employee Management API running at http://${HOST}:${PORT}`
    );
  });
}

// Export Express app for automated testing
module.exports = app;
