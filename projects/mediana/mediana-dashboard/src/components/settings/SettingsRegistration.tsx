import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { PersonalRegisteredInfo } from "./PersonalRegisteredInfo";
import { BusinessRegisteredInfo } from "./BusinessRegisteredInfo";
import { RegisteredVoIPNumbers } from "./RegisteredVoIPNumbers";

interface SettingsRegistrationProps {
  onAddNumberClick?: () => void;
  addNumberDialogOpen?: boolean;
  onAddNumberDialogChange?: (open: boolean) => void;
  onTabChange?: (tab: string) => void;
}

export function SettingsRegistration({ 
  onAddNumberClick,
  addNumberDialogOpen,
  onAddNumberDialogChange,
  onTabChange
}: SettingsRegistrationProps = {}) {
  const [activeTab, setActiveTab] = useState("voip-numbers");

  useEffect(() => {
    if (onTabChange) {
      onTabChange(activeTab);
    }
  }, [activeTab, onTabChange]);

  return (
    <div className="p-6 w-full">
      <Tabs defaultValue="voip-numbers" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="voip-numbers">Registered VoIP Numbers</TabsTrigger>
          <TabsTrigger value="personal">Personal Registered Info</TabsTrigger>
          <TabsTrigger value="business">Business Registered Info</TabsTrigger>
        </TabsList>

        <TabsContent value="voip-numbers">
          <RegisteredVoIPNumbers 
            externalDialogOpen={addNumberDialogOpen}
            onExternalDialogOpenChange={onAddNumberDialogChange}
          />
        </TabsContent>

        <TabsContent value="personal">
          <PersonalRegisteredInfo />
        </TabsContent>

        <TabsContent value="business">
          <BusinessRegisteredInfo />
        </TabsContent>
      </Tabs>
    </div>
  );
}