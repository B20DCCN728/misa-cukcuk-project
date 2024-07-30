namespace EmployeeManagement.DTO
{
    public class EmployeeCreateDto
    {
        public string? EmployeeCode { get; set; }
        public string? EmployeeName { get; set; }
        public string? DepartmentId { get; set; }
        public string? PositionId { get; set; }
        public DateTime? DateOfBirth { get; set; }
    }
}
