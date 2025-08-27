create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  -- create a anonymous profile for the user
  if new.raw_app_meta_data is not null then
    if new.raw_app_meta_data ? 'provider' and new.raw_app_meta_data ->> 'provider' = 'email' then
      insert into public.profiles (profile_id, name, username, role)
      values(new.id, 'Anonymous', 'mr.' || substr(md5(random()::text), 1, 8), 'developer');
    end if;
  end if;
  return new;
end;
$$;


-- 유저 생성 트리거 auth.users 테이블에 유저 생성 시 자동으로 프로필 생성
create trigger user_to_profile_trigger
after insert on auth.users
for each row execute function public.handle_new_user();