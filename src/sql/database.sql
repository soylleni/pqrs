CREATE SCHEMA pqrs;

CREATE DATABASE pqrs;

CREATE DATABASE usuario;

USE pqrs;

CREATE TABLE `pqrs`.`pqrs` (
  `idpqrs` INT NOT NULL AUTO_INCREMENT,
  `documento` VARCHAR(45) NOT NULL,
  `tipo_documento` VARCHAR(45) NOT NULL,
  `nombre_solic` VARCHAR(45) NOT NULL,
  `apellido_solic` VARCHAR(45) NOT NULL,
  `celular_solic` VARCHAR(45) NULL,
  `fijo_solic` VARCHAR(45) NOT NULL,
  `email_solic` VARCHAR(45) NOT NULL,
  `pqrs_titulo` VARCHAR(45) NOT NULL,
  `pqrs_tipo` VARCHAR(45) NOT NULL,
  `pqrs_cuerpo` VARCHAR(500) NOT NULL,
  `pqrs_estado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idpqrs`));

  CREATE TABLE `pqrs`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusuario`));



INSERT INTO `pqrs`. `pqrs`(`idpqrs`, `documento`, `tipo_documento`, `nombre_solic`, 
`apellido_solic`, `celular_solic`, `fijo_solic`, `email_solic`, `pqrs_titulo`,
`pqrs_tipo`, `pqrs_cuerpo`, `pqrs_estado`) VALUES ('1030738278', 'CE', 
'Trinidad', 'Villanueva Molina','3054914988', '6016638992',
'slaff@icloud.com',	'Petición de devolución de dinero',	'Petición',
'Quiero que me devuelvan el dinero por daño en par de zapatos comprados',
'Activa')

INSERT INTO `pqrs`.`usuario` (`idusuario`, `userName`, `password`) VALUES
 ('1', 'manuel123', 'yThu!!tQX!');

SELECT * FROM pqrs.pqrs;
SELECT * FROM pqrs.usuario;

