import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../components/ui/sheet";
import photo from "../assets/images/photo.jpg";

function RightSideSheet({ activeSheet, onClose }) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    if (activeSheet) {
      const key = activeSheet === "favorites" ? "favoriteItems" : "cartItems";
      const storedData = localStorage.getItem(key);

      if (storedData) {
        setDataList(JSON.parse(storedData));
      } else {
        setDataList([]);
      }
    }
  }, [activeSheet]);

  return (
    <Sheet open={!!activeSheet} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {activeSheet === "favorites" ? "Favorilerim" : "Sepetim"}
          </SheetTitle>
          <SheetDescription>
            {activeSheet === "favorites"
              ? "Favori ürünlerinizi buradan görüntüleyebilirsiniz."
              : "Sepetteki ürünlerinizi buradan görüntüleyebilirsiniz."}
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-2 mx-2">
          {dataList.length > 0 ? (
            dataList.map((item, index) => (
              <div
                key={index}
                className="p-2 border rounded-md flex items-center space-x-4"
              >
                <img src={photo} alt="Logo" className="h-12 w-12 rounded-lg" />
                <span>
                  {item.name} - {item.price}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm flex justify-center">
              Burada görüntülenecek ürün bulunmuyor.
            </p>
          )}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="button">ALIŞVERİŞE DEVAM ET</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default RightSideSheet;
