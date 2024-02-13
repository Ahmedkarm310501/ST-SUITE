import {
  Combobox,
  Group,
  Input,
  InputBase,
  Text,
  useCombobox,
} from "@mantine/core";
import { cn } from "../cn";
import SelectIcon from "../icons/SelectIcon";
import ChevronIcon from "../icons/ChevronIcon";
import { useEffect } from "react";

function OptionItem({
  item,
  className,
}: {
  item?: string;
  className?: string;
}) {
  return (
    <Group className={cn("items-center py-2", className)}>
      <SelectIcon />
      <Text className="text-sm font-medium  ">{item}</Text>
    </Group>
  );
}

type CustomSelectProps = {
  label: string;
  placeholder: string;
  items: string[];
  name: string;
  onChange: (val: string) => void;
  selectedItem: string | null;
};

export function CustomSelect({
  label,
  placeholder,
  items,
  name,
  onChange,
  selectedItem,
}: CustomSelectProps) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  useEffect(() => {
    if (!selectedItem) onChange(items[0]);
  }, []);

  const options = items?.map((item) => (
    <Combobox.Option
      value={item}
      key={item}
      className="text-neutral-300 hover:text-[#6B6B6B]"
    >
      <OptionItem item={item} />
    </Combobox.Option>
  ));

  return (
    <div className="flex flex-col gap-2 font-poppins w-full">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <Combobox
        store={combobox}
        withinPortal={false}
        zIndex={1000}
        onOptionSubmit={(val) => {
          combobox.closeDropdown();
          onChange(val);
        }}
      >
        <Combobox.Target>
          <InputBase
            component="button"
            type="button"
            pointer
            id={name}
            onClick={() => combobox.toggleDropdown()}
            rightSectionPointerEvents="none"
            rightSection={<ChevronIcon />}
            name={name}
            classNames={{
              input:
                "bg-transparent text-neutral-300 focus:border-white border-[1px] px-4 py-2 h-auto rounded-lg",
            }}
          >
            {selectedItem ? (
              <OptionItem item={selectedItem} />
            ) : (
              <Input.Placeholder>{placeholder}</Input.Placeholder>
            )}
          </InputBase>
        </Combobox.Target>

        <Combobox.Dropdown className="z-[10] bg-primary">
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}
