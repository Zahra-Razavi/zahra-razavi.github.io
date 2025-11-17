import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Eye, Pencil, UserPlus, Search, Users as UsersIcon, UserCheck, Shield, Headset } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { getDemoUsers } from "../utils/demo-mode";

interface User {
  id: string;
  name: string;
  dialingNumber: string;
  extension: string;
  callerId: string;
  callTime: string;
  isOnline: boolean;
  accessLevel: "Admin" | "Manager" | "Operators";
  lastOnline: string;
}

export function Users() {
  const [users, setUsers] = useState<User[]>(getDemoUsers());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedUser, setEditedUser] = useState<User | null>(null);

  const filteredUsers = users.filter(
    (user) =>
      user.dialingNumber.includes(searchQuery) ||
      user.extension.includes(searchQuery) ||
      user.callerId.includes(searchQuery)
  );

  const handleView = (user: User) => {
    setSelectedUser(user);
    setIsViewDialogOpen(true);
  };

  const handleEdit = (user: User) => {
    setEditedUser({ ...user });
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = () => {
    if (editedUser) {
      setUsers(
        users.map((u) => (u.id === editedUser.id ? editedUser : u))
      );
      setIsEditDialogOpen(false);
      setEditedUser(null);
    }
  };

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Stats Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <UsersIcon className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">{users.length}</p>
                <p className="text-sm text-muted-foreground">Total Users</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {users.filter((u) => u.isOnline).length}
                </p>
                <p className="text-sm text-muted-foreground">Online Now</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <Shield className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {users.filter((u) => u.accessLevel === "Admin").length}
                </p>
                <p className="text-sm text-muted-foreground">Admins</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <Headset className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {users.filter((u) => u.accessLevel === "Operators").length}
                </p>
                <p className="text-sm text-muted-foreground">Operators</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by caller ID, dialing number, or extension..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>
            View and manage all users with their access levels and call details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Caller ID</TableHead>
                  <TableHead>Dialing Number</TableHead>
                  <TableHead>Extension</TableHead>
                  <TableHead>Call Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Access Level</TableHead>
                  <TableHead>Last Online</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center text-muted-foreground">
                      No users found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.callerId}</TableCell>
                      <TableCell>{user.dialingNumber}</TableCell>
                      <TableCell>{user.extension}</TableCell>
                      <TableCell>{user.callTime}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              user.isOnline ? "bg-teal" : "bg-muted-foreground"
                            }`}
                          />
                          <span className={user.isOnline ? "text-teal" : "text-muted-foreground"}>
                            {user.isOnline ? "Online" : "Offline"}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {user.accessLevel}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {user.lastOnline}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleView(user)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(user)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* View User Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
            <DialogDescription>
              View complete information for this user
            </DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Caller ID</Label>
                  <p>{selectedUser.callerId}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Status</Label>
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        selectedUser.isOnline ? "bg-teal" : "bg-muted-foreground"
                      }`}
                    />
                    <span className={selectedUser.isOnline ? "text-teal" : ""}>
                      {selectedUser.isOnline ? "Online" : "Offline"}
                    </span>
                  </div>
                </div>
                <div>
                  <Label className="text-muted-foreground">Dialing Number</Label>
                  <p>{selectedUser.dialingNumber}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Extension</Label>
                  <p>{selectedUser.extension}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Call Time</Label>
                  <p>{selectedUser.callTime}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Access Level</Label>
                  <p>{selectedUser.accessLevel}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Last Online</Label>
                  <p>{selectedUser.lastOnline}</p>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsViewDialogOpen(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Update user information and settings
            </DialogDescription>
          </DialogHeader>
          {editedUser && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-dialing">Dialing Number</Label>
                  <Input
                    id="edit-dialing"
                    value={editedUser.dialingNumber}
                    onChange={(e) =>
                      setEditedUser({
                        ...editedUser,
                        dialingNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-extension">Extension</Label>
                  <Input
                    id="edit-extension"
                    value={editedUser.extension}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, extension: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-caller-id">Caller ID</Label>
                <Input
                  id="edit-caller-id"
                  value={editedUser.callerId}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, callerId: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-access-level">Access Level</Label>
                <Select
                  value={editedUser.accessLevel}
                  onValueChange={(value: any) =>
                    setEditedUser({ ...editedUser, accessLevel: value })
                  }
                >
                  <SelectTrigger id="edit-access-level">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Manager">Manager</SelectItem>
                    <SelectItem value="Operators">Operators</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveEdit}
              className="bg-teal hover:bg-teal-dark text-white"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}