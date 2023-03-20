create table user (
  userId int4 unsigned primary key auto_increment,
  email varchar(64) not null unique,
  password varchar(64) not null unique,
  name varchar(64) not null,
  surname varchar(64) not null,
  mobile varchar(16) not null,
  createdAt timestamp default current_timestamp,
  updateAt timestamp default current_timestamp
);

create table product (
  productId int4 unsigned primary key auto_increment,
  title varchar(64) not null,
  description varchar(64) not null,
  images varchar(256) not null,
  price varchar(16) not null,
  createdAt timestamp default current_timestamp,
  updateAt timestamp default current_timestamp
  -- role ENUM('USER', 'ADMIN') DEFAULT 'USER'; added by alter table
);

create table usercart (
	productId int4 unsigned not null,
	userId int4 unsigned not null primary key,
  foreign key (productId) references product(productId),
  foreign key (userId) references user(userId)
);