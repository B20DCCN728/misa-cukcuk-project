using EmployeeManagement.Model;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagement.Data
{
    public class AppDbContext : DbContext
    {   
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Department> Department { get; set; }
        public DbSet<Position> Postition { get; set; }
        public DbSet<EmployeeManagement.Model.Employee> Employee { get; set; } = default!;
    }
}
