import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Plus, Trash2, Phone } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface VoIPNumber {
  id: string;
  number: string;
  extension: string;
  description: string;
  dateAdded: string;
}

interface RegisteredVoIPNumbersHeaderActionsProps {
  onAddClick: () => void;
}

export function RegisteredVoIPNumbersHeaderActions({ onAddClick }: RegisteredVoIPNumbersHeaderActionsProps) {
  return (
    <Button
      onClick={onAddClick}
      className="bg-teal hover:bg-teal-dark text-white"
      size="sm"
    >
      <Plus className="h-4 w-4 mr-2" />
      Add Number
    </Button>
  );
}

interface RegisteredVoIPNumbersProps {
  externalDialogOpen?: boolean;
  onExternalDialogOpenChange?: (open: boolean) => void;
}

export function RegisteredVoIPNumbers({ 
  externalDialogOpen, 
  onExternalDialogOpenChange 
}: RegisteredVoIPNumbersProps = {}) {
  const [numbers, setNumbers] = useState<VoIPNumber[]>([]);
  const [internalDialogOpen, setInternalDialogOpen] = useState(false);
  const [newNumber, setNewNumber] = useState({
    number: "",
    extension: "",
    description: "",
  });

  // Use external control if provided, otherwise use internal state
  const isAddDialogOpen = externalDialogOpen !== undefined ? externalDialogOpen : internalDialogOpen;
  const setIsAddDialogOpen = onExternalDialogOpenChange || setInternalDialogOpen;

  useEffect(() => {
    // Load existing numbers from localStorage
    const savedData = localStorage.getItem("voipNumbers");
    if (savedData) {
      setNumbers(JSON.parse(savedData));
    } else {
      // Initialize with demo data
      const demoNumbers: VoIPNumber[] = [
        {
          id: "1",
          number: "+1 (555) 100-1000",
          extension: "1000",
          description: "Main Office Line",
          dateAdded: "2025-01-15",
        },
        {
          id: "2",
          number: "+1 (555) 100-1001",
          extension: "1001",
          description: "Sales Department",
          dateAdded: "2025-01-20",
        },
        {
          id: "3",
          number: "+1 (555) 100-1002",
          extension: "1002",
          description: "Support Department",
          dateAdded: "2025-02-01",
        },
      ];
      setNumbers(demoNumbers);
      localStorage.setItem("voipNumbers", JSON.stringify(demoNumbers));
    }
  }, []);

  const handleAddNumber = () => {
    if (!newNumber.number || !newNumber.extension) {
      toast.error("Please fill in all required fields");
      return;
    }

    const voipNumber: VoIPNumber = {
      id: Date.now().toString(),
      number: newNumber.number,
      extension: newNumber.extension,
      description: newNumber.description,
      dateAdded: new Date().toISOString().split("T")[0],
    };

    const updatedNumbers = [...numbers, voipNumber];
    setNumbers(updatedNumbers);
    localStorage.setItem("voipNumbers", JSON.stringify(updatedNumbers));

    setNewNumber({ number: "", extension: "", description: "" });
    setIsAddDialogOpen(false);
    toast.success("VoIP number added successfully");
  };

  const handleDeleteNumber = (id: string) => {
    const updatedNumbers = numbers.filter((num) => num.id !== id);
    setNumbers(updatedNumbers);
    localStorage.setItem("voipNumbers", JSON.stringify(updatedNumbers));
    toast.success("VoIP number removed successfully");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Registered VoIP Numbers</CardTitle>
          <CardDescription>
            Manage all registered VoIP phone numbers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Phone Number</TableHead>
                  <TableHead>Extension</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Date Added</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {numbers.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center text-muted-foreground"
                    >
                      No VoIP numbers registered yet
                    </TableCell>
                  </TableRow>
                ) : (
                  numbers.map((num) => (
                    <TableRow key={num.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-teal" />
                          {num.number}
                        </div>
                      </TableCell>
                      <TableCell>{num.extension}</TableCell>
                      <TableCell>{num.description}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(num.dateAdded).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteNumber(num.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Add Number Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New VoIP Number</DialogTitle>
            <DialogDescription>
              Register a new phone number to your account
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="number">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="number"
                value={newNumber.number}
                onChange={(e) =>
                  setNewNumber({ ...newNumber, number: e.target.value })
                }
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="extension">
                Extension <span className="text-destructive">*</span>
              </Label>
              <Input
                id="extension"
                value={newNumber.extension}
                onChange={(e) =>
                  setNewNumber({ ...newNumber, extension: e.target.value })
                }
                placeholder="1000"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={newNumber.description}
                onChange={(e) =>
                  setNewNumber({ ...newNumber, description: e.target.value })
                }
                placeholder="e.g., Main Office Line"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsAddDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddNumber}
              className="bg-teal hover:bg-teal-dark text-white"
            >
              Add Number
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}