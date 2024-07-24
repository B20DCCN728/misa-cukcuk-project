CREATE TABLE PTIT_B20DCCN728_NguyenHoangViet.`Position` (
  PositionId char(36) NOT NULL,
  PositionName varchar(1000) NOT NULL,
  CreateDate datetime DEFAULT NULL,
  CreateBy varchar(1000) DEFAULT NULL,
  ModifiedDate date DEFAULT NULL,
  ModifiedBy varchar(1000) DEFAULT NULL,
  PRIMARY KEY (PositionId)
)
ENGINE = INNODB,
AVG_ROW_LENGTH = 3276,
CHARACTER SET utf8mb3,
COLLATE utf8mb3_general_mysql500_ci;
