import { ActionIcon, Menu } from "@mantine/core";
import HeaderMenuIcon from "../icons/HeaderMenuIcon";

function HeaderMenu() {
  return (
    <Menu width={120} shadow="md">
      <Menu.Target>
        <ActionIcon className="cursor-pointer" variant="transparent">
          <HeaderMenuIcon />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown className="bg-blackTertiary">
        <Menu.Item className="text-[#404040]">profile</Menu.Item>
        <Menu.Item className="text-[#404040]">feed</Menu.Item>
        <Menu.Item className="text-[#404040]">offers</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default HeaderMenu;
