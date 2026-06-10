
-- menu_items
CREATE TABLE public.menu_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  price_fcfa INTEGER NOT NULL,
  image_url TEXT,
  sold_out BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.menu_items TO anon, authenticated;
GRANT ALL ON public.menu_items TO service_role;
ALTER TABLE public.menu_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "menu_items public read" ON public.menu_items FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "menu_items public insert" ON public.menu_items FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "menu_items public update" ON public.menu_items FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "menu_items public delete" ON public.menu_items FOR DELETE TO anon, authenticated USING (true);

-- orders
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  table_number INTEGER NOT NULL,
  items JSONB NOT NULL,
  total_fcfa INTEGER NOT NULL,
  customer_note TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.orders TO anon, authenticated;
GRANT ALL ON public.orders TO service_role;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "orders public read" ON public.orders FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "orders public insert" ON public.orders FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "orders public update" ON public.orders FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

-- promos
CREATE TABLE public.promos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  text TEXT NOT NULL,
  bg_color TEXT NOT NULL DEFAULT '#B62828',
  text_color TEXT NOT NULL DEFAULT '#F4E8DA',
  active BOOLEAN NOT NULL DEFAULT true,
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.promos TO anon, authenticated;
GRANT ALL ON public.promos TO service_role;
ALTER TABLE public.promos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "promos public read" ON public.promos FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "promos public insert" ON public.promos FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "promos public update" ON public.promos FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "promos public delete" ON public.promos FOR DELETE TO anon, authenticated USING (true);

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER menu_items_updated BEFORE UPDATE ON public.menu_items FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER orders_updated BEFORE UPDATE ON public.orders FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.menu_items;
ALTER PUBLICATION supabase_realtime ADD TABLE public.orders;
ALTER PUBLICATION supabase_realtime ADD TABLE public.promos;
