using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement.Model
{
    public class Employee
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string? EmployeeId { get; set; }

        [Required]
        public string? EmployeeCode { get; set; }

        [Required]
        public string? FullName { get; set; }
        
        [Required]
        public string? Email { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string IdentityNumber { get; set; }

        public DateTime? DateOfBirth { get; set; }

        public int? Gender { get; set; }

        public string? Address { get; set; }

        // Foreign key for Department
        public string? DepartmentId { get; set; }

        // Foreign key for Position
        public string? PositionId { get; set; }

        // Navigation properties
        [ForeignKey("DepartmentId")]
        public Department? Department { get; set; }

        [ForeignKey("PositionId")]
        public Position? Position { get; set; }

        public DateTime? IdentityDate { get; set; }
        public string? IdentityPlace { get; set; }
        public string? BankAccount { get; set; }
        public string? BankBrand { get; set; }
        public string? BankName { get; set; }
        public string? LandlineNumber { get; set; }

        public DateTime? CreatedDate { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string? ModifiedBy { get; set; }
    }

}
