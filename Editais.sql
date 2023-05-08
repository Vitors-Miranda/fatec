CREATE DATABASE Editais;
USE Editais;

CREATE TABLE TB_curso (
    id_curso INT PRIMARY KEY AUTO_INCREMENT,
    sigla VARCHAR(20),
    nome VARCHAR(200),
    turno VARCHAR(50),
    categoria VARCHAR(200),
    modalidade VARCHAR(200),
    inicio DATE,
    qtd_horas INT,
    periocidade Boolean,
    objetivo_curso VARCHAR(200),
    caminho varchar(300)
)ENGINE=INNODB;

CREATE TABLE TB_disciplina (
    id_disciplina INT PRIMARY KEY AUTO_INCREMENT,
    codigo_siga CHAR(06),
    nome VARCHAR(200),
    descricao VARCHAR(200),
    dia_semana VARCHAR(20),
    horarios VARCHAR(6),
    ementa VARCHAR(200)
)ENGINE=INNODB;

CREATE TABLE TB_edital(
    id_edital INT PRIMARY KEY AUTO_INCREMENT,
    inscricao DATE,
    classificacao DATE,
    interposicao DATE,
    analise DATE,
    resposta_final DATE,
    FK_id_curso INT,
    FOREIGN KEY (FK_id_curso) REFERENCES TB_curso(id_curso)  
)ENGINE=INNODB;

CREATE TABLE TB_disciplina_curso(
    id_disciplinaCurso INT PRIMARY KEY AUTO_INCREMENT,
    FK_id_curso INT,
    FK_id_disciplina INT,
    FOREIGN KEY (FK_id_curso) REFERENCES TB_curso(id_curso),
    FOREIGN KEY (FK_id_disciplina) REFERENCES TB_disciplina(id_disciplina)
)ENGINE=INNODB;

INSERT INTO TB_disciplina VALUES(1,"111115","Português","Aprender Língua portuguesa",1,"15:26","Português");
INSERT INTO TB_disciplina VALUES(2,"111116","Matemática","Aprender Cálculos avançados",4,"16:50","Cálculos");
INSERT INTO TB_disciplina VALUES(3,"111117","Inglês","Aprender Língua Estrangeira",7,"17:30","Língua estrangeira");

