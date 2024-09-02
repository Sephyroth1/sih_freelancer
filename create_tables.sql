-- Define ENUM types
CREATE TYPE role_type AS ENUM ('client', 'freelancer', 'intern');
CREATE TYPE project_status_type AS ENUM ('pending', 'in_progress', 'completed', 'cancelled');
CREATE TYPE assignment_status_type AS ENUM ('pending', 'in_progress', 'completed');
CREATE TYPE payment_status_type AS ENUM ('pending', 'in_escrow', 'released', 'refunded');

-- Create Users table
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role role_type NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Projects table
CREATE TABLE Projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    budget NUMERIC(10, 2) NOT NULL,
    client_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
    status project_status_type NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create ProjectAssignments table
CREATE TABLE ProjectAssignments (
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES Projects(id) ON DELETE CASCADE,
    freelancer_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status assignment_status_type NOT NULL DEFAULT 'pending'
);

-- Create Payments table
CREATE TABLE Payments (
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES Projects(id) ON DELETE CASCADE,
    intern_id INTEGER REFERENCES Users(id) ON DELETE CASCADE, -- Optional, for intern payments
    amount NUMERIC(10, 2) NOT NULL,
    status payment_status_type NOT NULL DEFAULT 'pending',
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    release_date TIMESTAMP
);
