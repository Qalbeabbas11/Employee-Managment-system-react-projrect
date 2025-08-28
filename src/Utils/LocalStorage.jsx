export const employees = [
  {
    id: 1,
    role: "employee",
    name: "Akmal",
    email: "employee@ems.com",
    password: "123",
    taskcount: {
      newTasks: 3,
      completed: 1,
      failed: 1,
      accep: 2,
    },
    tasks: [      {
        title: "Design Landing Page",
        description: "Create responsive landing page UI",
        date: "2025-09-01",
        category: "Design",
        active: true,
        newTask: true,
        failed: false,
        completed: false,
      },
      {
        title: "Fix Navbar Issues",
        description: "Resolve overlapping issues in navbar",
        date: "2025-09-05",
        category: "Development",
        active: true,
        newTask: true,
        failed: false,
        completed: false,
      },
      {
        title: "API Documentation",
        description: "Write API usage documentation",
        date: "2025-09-10",
        category: "Documentation",
        active: true,
        newTask: true,
        failed: false,
        completed: false,
      },
      {
        title: "Setup Testing Environment",
        description: "Configure Jest and React Testing Library",
        date: "2025-09-15",
        category: "Development",
        active: false,
        newTask: false,
        failed: false,
        completed: true,
      },
      {
        title: "Database Migration",
        description: "Migrate schema to new PostgreSQL server",
        date: "2025-09-20",
        category: "Database",
        active: false,
        newTask: false,
        failed: true,
        completed: false,
      },
      {
        title: "Integrate Stripe Payments",
        description: "Implement payment gateway for subscriptions",
        date: "2025-09-25",
        category: "Development",
        active: true,
        newTask: false,
        failed: false,
        completed: false,
      },
      {
        title: "Performance Optimization",
        description: "Optimize React rendering and bundle size",
        date: "2025-09-30",
        category: "Optimization",
        active: true,
        newTask: false,
        failed: false,
        completed: false,
      }]
  },

  {
    id: 2,
    role: "employee",
    name: "Ali Khan",
    email: "ali@ems.com",
    password: "ali123",
    taskcount: {
      newTasks: 3,
      completed: 1,
      failed: 1,
      accep: 2,
    },
    tasks: [
      {
        title: "Design Landing Page",
        description: "Create responsive landing page UI",
        date: "2025-09-01",
        category: "Design",
        active: true,
        newTask: true,
        failed: false,
        completed: false,
      },
      {
        title: "Fix Navbar Issues",
        description: "Resolve overlapping issues in navbar",
        date: "2025-09-05",
        category: "Development",
        active: true,
        newTask: true,
        failed: false,
        completed: false,
      },
      {
        title: "API Documentation",
        description: "Write API usage documentation",
        date: "2025-09-10",
        category: "Documentation",
        active: true,
        newTask: true,
        failed: false,
        completed: false,
      },
      {
        title: "Setup Testing Environment",
        description: "Configure Jest and React Testing Library",
        date: "2025-09-15",
        category: "Development",
        active: false,
        newTask: false,
        failed: false,
        completed: true,
      },
      {
        title: "Database Migration",
        description: "Migrate schema to new PostgreSQL server",
        date: "2025-09-20",
        category: "Database",
        active: false,
        newTask: false,
        failed: true,
        completed: false,
      },
      {
        title: "Integrate Stripe Payments",
        description: "Implement payment gateway for subscriptions",
        date: "2025-09-25",
        category: "Development",
        active: true,
        newTask: false,
        failed: false,
        completed: false,
      },
      {
        title: "Performance Optimization",
        description: "Optimize React rendering and bundle size",
        date: "2025-09-30",
        category: "Optimization",
        active: true,
        newTask: false,
        failed: false,
        completed: false,
      }
    ]
  },

  {
    id: 3,
    role: "employee",
    name: "Ali",
    email: "ali@ems.com",
    password: "123",
    taskcount: {
      newTasks: 2,
      completed: 0,
      failed: 0,
      accep: 2,
    },
    tasks: [
      {
        title: "Develop Homepage",
        description: "Code homepage layout using React and Tailwind",
        date: "2025-09-03",
        category: "Development",
        active: true,
        newTask: true,
        failed: false,
        completed: false,
      },
      {
        title: "UI Enhancement",
        description: "Improve dashboard design with animations",
        date: "2025-09-07",
        category: "Design",
        active: true,
        newTask: true,
        failed: false,
        completed: false,
      },
      {
        title: "Integrate Auth System",
        description: "Implement JWT based login system",
        date: "2025-09-12",
        category: "Security",
        active: true,
        newTask: false,
        failed: false,
        completed: false,
      },
      {
        title: "Setup Deployment",
        description: "Configure CI/CD pipeline for staging",
        date: "2025-09-18",
        category: "DevOps",
        active: true,
        newTask: false,
        failed: false,
        completed: false,
      }
    ]
  },

  {
    id: 4,
    role: "employee",
    name: "Hassan",
    email: "hassan@ems.com",
    password: "hassan123",
    taskcount: {
      newTasks: 1,
      completed: 2,
      failed: 1,
      accep: 0,
    },
    tasks: [
      {
        title: "Client Report Draft",
        description: "Prepare Q3 client project status report",
        date: "2025-09-04",
        category: "Documentation",
        active: true,
        newTask: true,
        failed: false,
        completed: false,
      },
      {
        title: "Bug Fix - Dashboard",
        description: "Resolve memory leak in dashboard charts",
        date: "2025-09-09",
        category: "Bugfix",
        active: false,
        newTask: false,
        failed: false,
        completed: true,
      },
      {
        title: "Write Unit Tests",
        description: "Cover modules with at least 70% test cases",
        date: "2025-09-14",
        category: "Testing",
        active: false,
        newTask: false,
        failed: false,
        completed: true,
      },
      {
        title: "Email Notifications",
        description: "Fix issue with delayed email notifications",
        date: "2025-09-22",
        category: "Bugfix",
        active: false,
        newTask: false,
        failed: true,
        completed: false,
      }
    ]
  }
];


const admin = [
  {
    "id": 1,
    "name": "Admin Saab",
    "email": "admin@ems.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};