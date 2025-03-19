-- ======================
-- GROUPS TABLE
-- ======================
CREATE TABLE groups (
    group_id SERIAL PRIMARY KEY,
    group_name VARCHAR(255) NOT NULL,
    created_by VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by VARCHAR(255),
    updated_at TIMESTAMP
);

-- ======================
-- COMPETENCIES TABLE
-- ======================
CREATE TABLE competencies (
    competency_id SERIAL PRIMARY KEY,
    group_id INT NOT NULL,
    competency_name VARCHAR(255) NOT NULL,
    created_by VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by VARCHAR(255),
    updated_at TIMESTAMP,
    FOREIGN KEY (group_id) REFERENCES groups(group_id) ON DELETE CASCADE
);

-- ======================
-- COMPETENCY DETAILS TABLE
-- ======================
CREATE TABLE competency_details (
    detail_id SERIAL PRIMARY KEY,
    competency_id INT NOT NULL,
    detail_name VARCHAR(255) NOT NULL,
    description TEXT,
    created_by VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by VARCHAR(255),
    updated_at TIMESTAMP,
    FOREIGN KEY (competency_id) REFERENCES competencies(competency_id) ON DELETE CASCADE
);

-- ======================
-- DYNAMIC ATTRIBUTES TABLE
-- ======================
CREATE TABLE dynamic_attributes (
    attribute_id SERIAL PRIMARY KEY,
    group_id INT NOT NULL,
    competency_id INT NOT NULL,
    attribute_key VARCHAR(255),
    attribute_value TEXT,
    created_by VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by VARCHAR(255),
    updated_at TIMESTAMP,
    FOREIGN KEY (group_id) REFERENCES groups(group_id) ON DELETE CASCADE,
    FOREIGN KEY (competency_id) REFERENCES competencies(competency_id) ON DELETE CASCADE
);

-- ======================
-- CANDIDATES TABLE
-- ======================
CREATE TABLE candidates (
    candidate_id SERIAL PRIMARY KEY,
    employee_id UUID NOT NULL,
    evaluator_id UUID NOT NULL,
    group_id INT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_by VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by VARCHAR(255),
    updated_at TIMESTAMP,
    FOREIGN KEY (group_id) REFERENCES groups(group_id) ON DELETE SET NULL
);

-- ======================
-- EVALUATORS TABLE
-- ======================
CREATE TABLE evaluators (
    evaluator_id SERIAL PRIMARY KEY,
    employee_id UUID NOT NULL,
    role VARCHAR(50) DEFAULT 'user', -- user / admin
    is_active BOOLEAN DEFAULT TRUE,
    created_by VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by VARCHAR(255),
    updated_at TIMESTAMP
);

-- ======================
-- EVALUATIONS TABLE
-- ======================
CREATE TABLE evaluations (
    evaluation_id SERIAL PRIMARY KEY,
    candidate_id INT NOT NULL,
    evaluator_id INT NOT NULL,
    status VARCHAR(50) DEFAULT 'pending', -- pending / completed / notified
    notified_at TIMESTAMP,
    completed_at TIMESTAMP,
    created_by VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by VARCHAR(255),
    updated_at TIMESTAMP,
    UNIQUE (candidate_id, evaluator_id),
    FOREIGN KEY (candidate_id) REFERENCES candidates(candidate_id) ON DELETE CASCADE,
    FOREIGN KEY (evaluator_id) REFERENCES evaluators(evaluator_id) ON DELETE CASCADE
);

-- ======================
-- RATINGS TABLE
-- ======================
CREATE TABLE ratings (
    rating_id SERIAL PRIMARY KEY,
    evaluation_id INT NOT NULL,
    detail_id INT NOT NULL,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_by VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by VARCHAR(255),
    updated_at TIMESTAMP,
    FOREIGN KEY (evaluation_id) REFERENCES evaluations(evaluation_id) ON DELETE CASCADE,
    FOREIGN KEY (detail_id) REFERENCES competency_details(detail_id) ON DELETE CASCADE
);

-- ======================
-- NOTIFICATIONS TABLE
-- ======================
CREATE TABLE notifications (
    notification_id SERIAL PRIMARY KEY,
    evaluation_id INT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    type VARCHAR(50) DEFAULT 'email',
    status VARCHAR(50) DEFAULT 'sent',
    created_by VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by VARCHAR(255),
    updated_at TIMESTAMP,
    FOREIGN KEY (evaluation_id) REFERENCES evaluations(evaluation_id) ON DELETE CASCADE
);

-- ======================
-- IMPORT BATCHES TABLE
-- ======================
CREATE TABLE import_batches (
    batch_id SERIAL PRIMARY KEY,
    imported_by UUID NOT NULL, -- Admin's Keycloak user_id
    imported_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    description TEXT,
    created_by VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by VARCHAR(255),
    updated_at TIMESTAMP
);

-- ======================
-- IMPORT RECORDS TABLE
-- ======================
CREATE TABLE import_records (
    record_id SERIAL PRIMARY KEY,
    batch_id INT NOT NULL,
    candidate_id INT NOT NULL,
    evaluator_id INT NOT NULL,
    status VARCHAR(50) DEFAULT 'imported', -- imported / failed
    error_message TEXT,
    created_by VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by VARCHAR(255),
    updated_at TIMESTAMP,
    FOREIGN KEY (batch_id) REFERENCES import_batches(batch_id) ON DELETE CASCADE,
    FOREIGN KEY (candidate_id) REFERENCES candidates(candidate_id) ON DELETE CASCADE,
    FOREIGN KEY (evaluator_id) REFERENCES evaluators(evaluator_id) ON DELETE CASCADE
);
