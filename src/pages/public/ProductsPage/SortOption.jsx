import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function SortOption({ sortProducts }) {
  return (
    <div className="relative">
      <Disclosure as="div" className="">
        {({ open }) => (
          <>
            <DisclosureButton className="flex justify-center items-center cursor-pointer">
              <span className="text-lg font-bold">Sắp xếp</span>
              <KeyboardArrowDown className="opacity-50 font-bold cursor-pointer" />
            </DisclosureButton>
            <DisclosurePanel className="absolute top-full right-0 z-20 pt-2 w-32 text-center">
              <div className="bg-white shadow-md">
                <div
                  className="py-1 border border-logo-green cursor-pointer"
                  onClick={() => sortProducts("highToLow")}
                >
                  Giá cao tới thấp
                </div>
                <div
                  className="py-1 border border-logo-green cursor-pointer"
                  onClick={() => sortProducts("lowToHigh")}
                >
                  Giá thấp tới cao
                </div>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
