CREATE TABLE PTIT_B20DCCN728_NguyenHoangViet.Department (
  DepartmentId char(36) NOT NULL DEFAULT (UUID()),
  DepartmentCode varchar(1000) NOT NULL COMMENT 'mã phòng ban',
  DepartmentName varchar(1000) DEFAULT NULL COMMENT 'tên phòng ban',
  CreatedDate date DEFAULT NULL COMMENT 'ngày tạo',
  CreatedBy varchar(1000) DEFAULT NULL COMMENT 'người tạo',
  ModifiedDate date DEFAULT NULL COMMENT 'ngày chỉnh sửa gần nhất',
  ModifiedBy varchar(1000) DEFAULT NULL COMMENT 'người chỉnh sửa',
  PRIMARY KEY (DepartmentId)
)