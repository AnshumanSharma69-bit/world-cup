-- ════════════════════════════════════════════
-- WORLD CUP 2026 — SUPABASE SCHEMA
-- Run this in Supabase SQL Editor first
-- ════════════════════════════════════════════

-- Drop existing tables if rebuilding
drop table if exists players cascade;
drop table if exists teams cascade;

-- ════ TEAMS TABLE ════
create table teams (
  id          serial primary key,
  name        text not null,
  flag        text not null,
  faction     text not null,
  style       text not null,
  threat      text not null,         -- SP / S / A+ / A / B
  formation   text not null,
  overall     integer not null,
  color       text not null,         -- hex color
  atk         integer not null,
  def         integer not null,
  mid         integer not null,
  group_name  text not null,         -- Group A–H
  confederat  text not null,         -- UEFA / CONMEBOL / etc
  created_at  timestamptz default now()
);

-- ════ PLAYERS TABLE ════
create table players (
  id          serial primary key,
  team_id     integer references teams(id) on delete cascade,
  name        text not null,
  code        text not null,         -- villain codename
  number      integer not null,
  position    text not null,         -- GK / DEF / MID / FWD
  nationality text not null,         -- flag emoji
  ovr         integer not null,
  attr1_key   text,
  attr1_val   integer,
  attr2_key   text,
  attr2_val   integer,
  attr3_key   text,
  attr3_val   integer,
  is_captain  boolean default false,
  age         integer,
  club        text,
  created_at  timestamptz default now()
);

-- ════ INDEXES ════
create index idx_players_team     on players(team_id);
create index idx_players_position on players(position);
create index idx_players_ovr      on players(ovr desc);
create index idx_teams_group      on teams(group_name);

-- ════ ROW LEVEL SECURITY — public read ════
alter table teams   enable row level security;
alter table players enable row level security;

create policy "Public read teams"
  on teams for select using (true);

create policy "Public read players"
  on players for select using (true);
