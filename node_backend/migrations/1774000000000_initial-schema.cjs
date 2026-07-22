/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.up = (pgm) => {
  pgm.createTable("website_requests", {
    id: "id",
    name: { type: "varchar(255)", notNull: true },
    email: { type: "varchar(255)", notNull: true },
    phone: { type: "varchar(255)", notNull: true },
    business_name: { type: "varchar(255)", notNull: true },
    website_type: { type: "varchar(255)", notNull: true },
    number_of_pages: { type: "varchar(255)" },
    feature_needs: { type: "text" },
    hosting: { type: "boolean", notNull: true, default: false },
    maintenance_frequency: { type: "varchar(255)" },
    seo_level: { type: "varchar(255)" },
    discovery_call: { type: "boolean", notNull: true, default: false },
    budget: { type: "varchar(255)", notNull: true },
    description: { type: "text" },
    status: { type: "varchar(255)", notNull: true, default: "Pending" },
  });

  pgm.createTable("bookings", {
    id: "id",
    name: { type: "varchar(255)", notNull: true },
    company_name: { type: "varchar(255)", notNull: true },
    email: { type: "varchar(255)", notNull: true },
    phone: { type: "varchar(255)", notNull: true },
    budget_range: { type: "varchar(255)", notNull: true },
    date: { type: "varchar(255)", notNull: true },
    time: { type: "varchar(255)", notNull: true },
  });

  pgm.createTable("slots", {
    id: "id",
    date: { type: "varchar(255)", notNull: true },
    time: { type: "varchar(255)", notNull: true },
    is_available: { type: "boolean", notNull: true, default: true },
  });

  pgm.createTable("reviews", {
    id: "id",
    name: { type: "varchar(255)", notNull: true },
    rating: { type: "integer", notNull: true },
    comment: { type: "text", notNull: true },
    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

/** @param {import('node-pg-migrate').MigrationBuilder} pgm */
exports.down = (pgm) => {
  pgm.dropTable("reviews");
  pgm.dropTable("slots");
  pgm.dropTable("bookings");
  pgm.dropTable("website_requests");
};
