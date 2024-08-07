﻿namespace EmployeeManagement.DTO
{
    public class PositionResponseDto
    {
        public string? PositionId { get; set; }
        public string? PositionCode { get; set; }
        public string? PositionName { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string? ModifiedBy { get; set; }
    }
}
