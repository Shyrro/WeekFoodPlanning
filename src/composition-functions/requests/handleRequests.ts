import { onMounted, Ref, ref } from "vue";
import axios, { AxiosError, AxiosResponse } from "axios";

export function useFetch<T>(dbTable: string): Ref<Array<T>> {
  const apiString = `https://nextjs-iota-dusky-14.vercel.app/api/${dbTable}`;
  const fetchedObject: Ref<Array<T>> = ref([]);

  onMounted(() => {
    axios
      .get<Array<T>>(apiString)
      .then((dbObject: AxiosResponse<Array<T>>) => {
        fetchedObject.value = dbObject.data;
      })
      .catch((error: AxiosError) => {
        console.log(error.message);
      });
  });

  return fetchedObject;
}
