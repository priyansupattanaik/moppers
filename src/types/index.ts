export type navBarType = {
  id: number;
  title: string;
  path: string;
  submenu?: submenuType[];
};
export type submenuType = {
  id: number;
  subpage: string;
  path: string;
};
