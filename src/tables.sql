create table E_Products(
    id_product VARCHAR(255) PRIMARY key not null,
    product VARCHAR(255) not null,
    product_price float not null,
    product_img varchar(255) not null,
    product_description varchar(255) not null
);

create table E_Cart(
    cart_id VARCHAR(255) PRIMARY key not null,
    qtd_purchase int not null,
    fk_client varchar(255) not null,
    fk_product varchar(255) not null
);

drop table E_Cart;

drop table E_Products;

drop table E_Client;

drop table E_Purchases;

create table E_Client(
    client_id VARCHAR(255) PRIMARY KEY not null,
    client_name VARCHAR(255) not null,
    client_cpf VARCHAR(255) not null UNIQUE,
    client_password VARCHAR(255) not null,
    client_phone VARCHAR(255) not null,
    client_email VARCHAR(255) not null
);

create table E_Purchases(
    purchase_id VARCHAR(255) PRIMARY KEY not null,
    purchase_qtd INT not null,
    purchase_date VARCHAR(255) not null,
    fk_client VARCHAR(255) not null,
    fk_product VARCHAR(255) not null
)