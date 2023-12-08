create table public.vehicle (
    id bigserial not null primary key,
    type bigint not null,
    name varchar(128) not null,
    latitude float,
    longitude float,
    last_seen timestamp
);

create table public.vehicle_type (
    id bigserial not null primary key,
    name varchar(128) not null,
    description varchar(4096)
);

ALTER TABLE public."vehicle" ADD CONSTRAINT vehicle_fk FOREIGN KEY ("type") REFERENCES public.vehicle_type(id);