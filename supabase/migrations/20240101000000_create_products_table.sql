create table public.products (
  id uuid not null default gen_random_uuid (),
  name text not null,
  description text null,
  price text null,
  image_url text null,
  created_at timestamp with time zone not null default now(),
  constraint products_pkey primary key (id)
);

alter table public.products enable row level security;

create policy "Allow public read access"
  on public.products
  for select
  to public
  using (true);
