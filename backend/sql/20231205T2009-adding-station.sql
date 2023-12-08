create table public.station (
    id bigserial not null primary key,
    type bigint not null,
    name varchar(128) not null,
    longitude float not null,
    latitude float not null
);

create table public.station_type (
    id bigserial not null primary key,
    name varchar(128) not null,
    description varchar(4096)
);

ALTER TABLE public."station" ADD CONSTRAINT station_fk FOREIGN KEY ("type") REFERENCES public.station_type(id);