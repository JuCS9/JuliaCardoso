create database login;

use login;

create table user (
id_user int primary key,
username varchar(20) NOT NULL,
password varchar(8) NOT NULL
);

select * from user;

insert into user(id_user, username, password) values
(116245689, 'Julia Cardoso', 'julia123');