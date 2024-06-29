import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create invoice",
};

interface Breadcrumb {
  id: number;
  parent: number | null;
  advertisement_count: number;
  has_child_cache: boolean;
  name_en_us: string;
  name_ru: string;
  name_src: string;
}

export default async function Page() {
  const customers = await fetchCustomers();
  // const allbreadcrumbs = [
  //   {
  //     id: 42,
  //     parent: 18,
  //     advertisement_count: 0,
  //     has_child_cache: false,
  //     name_en_us: "Video cameras",
  //     name_ru: "Видеокамеры",
  //     name_src: "child cache update",
  //   },
  //   {
  //     id: 41,
  //     parent: 18,
  //     advertisement_count: 0,
  //     has_child_cache: false,
  //     name_en_us: "Action cameras",
  //     name_ru: "Экшн-камеры",
  //     name_src: "child cache update",
  //   },
  //   {
  //     id: 18,
  //     parent: 14,
  //     advertisement_count: 0,
  //     has_child_cache: true,
  //     name_en_us: "Photo and video cameras",
  //     name_ru: "Фото- и видеокамеры",
  //     name_src: "child cache update",
  //   },
  //   {
  //     id: 14,
  //     parent: null,
  //     advertisement_count: 0,
  //     has_child_cache: true,
  //     name_en_us: "Electronics",
  //     name_ru: "Электроника",
  //     name_src: "child cache update",
  //   },
  // ];
  // const randomBreadcrumb = {
  //   id: 42,
  //   parent: 18,
  //   advertisement_count: 0,
  //   has_child_cache: false,
  //   name_en_us: "Video cameras",
  //   name_ru: "Видеокамеры",
  //   name_src: "child cache update",
  // };

  // const createBreadcrumsPath = (
  //   breadcrumbs: Breadcrumb[],
  //   lastBreadcrumb: Breadcrumb
  // ) => {
  //   let currBreadcrumb = lastBreadcrumb;
  //   const result = [currBreadcrumb];
  //   while (currBreadcrumb.parent !== null) {
  //     const parrent = breadcrumbs.find((b) => b.id === currBreadcrumb.parent);
  //     if (parrent) {
  //       currBreadcrumb = parrent;
  //       result.push(currBreadcrumb);
  //     } else {
  //       break;
  //     }
  //   }
  //   result.reverse();
  //   console.log(
  //     "result",
  //     result,
  //     result.reduce((acc, curr) => (acc += curr.name_ru + " > "), "")
  //   );
  //   return result;
  // };
  // const breadcrumbs = createBreadcrumsPath(allbreadcrumbs, randomBreadcrumb);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
