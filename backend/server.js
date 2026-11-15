
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

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
  { id: 1, name: "Rahul", department: "DevOps" },
  { id: 2, name: "Priya", department: "Cloud" }
];

// Get all employees
app.get("/api/employees", (req, res) => {
  res.json(employees);
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Employee Management API running on port ${PORT}`);
  });
}

module.exports = app;
