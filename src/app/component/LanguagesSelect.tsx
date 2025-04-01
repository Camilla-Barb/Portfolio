import * as Select from "@radix-ui/react-select";
import React from "react";
// import i18n from "../utils/translation";
// import { useTranslation } from "react-i18next";

//   const { t } = useTranslation();
const LanguagesSelect = () => (
  <Select.Root>
    <Select.Trigger className="btn SelectTrigger">
      <Select.Value placeholder="Lang" />
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="SelectContent">
        <Select.Viewport>
          <SelectItem value="option1">EN</SelectItem>
          <SelectItem value="option2">IT</SelectItem>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

type SelectItemProps = React.ComponentPropsWithoutRef<typeof Select.Item>;

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, ...props }, ref) => (
    <Select.Item className="SelectItem" {...props} ref={ref}>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  )
);

SelectItem.displayName = "SelectItem"; // to avoid warning with forwardRef

export default LanguagesSelect;
