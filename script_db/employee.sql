CREATE TABLE PTIT_B20DCCN728_NguyenHoangViet.Employee (
  EmployeeId char(36) NOT NULL,
  EmployeeCode varchar(1000) NOT NULL,
  FullName varchar(1000) NOT NULL,
  Email varchar(1000) NOT NULL,
  PhoneNumber varchar(1000) NOT NULL,
  IdentityNumber varchar(1000) NOT NULL,
  DateOfBirth date DEFAULT NULL,
  Gender int DEFAULT NULL,
  Address varchar(1000) DEFAULT NULL,
  DepartmentId char(36) DEFAULT NULL,
  PositionId char(36) DEFAULT NULL,
  IdentityDate date DEFAULT NULL,
  IdentityPlace varchar(1000) DEFAULT NULL,
  BankAccount varchar(1000) DEFAULT NULL,
  BankBrand varchar(1000) DEFAULT NULL,
  BankName varchar(1000) DEFAULT NULL,
  LandlineNumber varchar(1000) DEFAULT NULL,
  CreateDate datetime DEFAULT NULL,
  CreateBy varchar(1000) DEFAULT NULL,
  ModifiedDate date DEFAULT NULL,
  ModifiedBy varchar(1000) DEFAULT NULL,
  PRIMARY KEY (EmployeeId)
);

ALTER TABLE PTIT_B20DCCN728_NguyenHoangViet.Employee
ADD CONSTRAINT FK_Employee_DepartmentId FOREIGN KEY (DepartmentId)
REFERENCES PTIT_B20DCCN728_NguyenHoangViet.Department (DepartmentId);

ALTER TABLE PTIT_B20DCCN728_NguyenHoangViet.Employee
ADD CONSTRAINT FK_Employee_PositionId FOREIGN KEY (PositionId)
REFERENCES PTIT_B20DCCN728_NguyenHoangViet.Position (PositionId);
