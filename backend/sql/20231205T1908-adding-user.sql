create table public.user (
	id bigserial not null primary key,
	type bigint not null,
	username varchar(512) not null,
	password varchar(512) not null
);

create table public.user_type (
    id bigserial not null primary key,
    name varchar(128),
    description varchar(4096)
);

ALTER TABLE public."user" ADD CONSTRAINT user_fk FOREIGN KEY ("type") REFERENCES public.user_type(id);