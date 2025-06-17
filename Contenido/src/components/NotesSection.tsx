import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Plus, Edit, Trash2, Save, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Note {
  id: string;
  content: string;
  timestamp: string;
  videoTime?: string;
}

interface NotesSectionProps {
  notes: Note[];
  onAddNote: (content: string, videoTime?: string) => void;
  onEditNote: (id: string, content: string) => void;
  onDeleteNote: (id: string) => void;
}

export const NotesSection = ({
  notes,
  onAddNote,
  onEditNote,
  onDeleteNote,
}: NotesSectionProps) => {
  const [newNote, setNewNote] = useState("");
  const [editingNote, setEditingNote] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");

  const handleAddNote = () => {
    if (newNote.trim()) {
      onAddNote(newNote.trim());
      setNewNote("");
    }
  };

  const handleStartEdit = (note: Note) => {
    setEditingNote(note.id);
    setEditContent(note.content);
  };

  const handleSaveEdit = () => {
    if (editingNote && editContent.trim()) {
      onEditNote(editingNote, editContent.trim());
      setEditingNote(null);
      setEditContent("");
    }
  };

  const handleCancelEdit = () => {
    setEditingNote(null);
    setEditContent("");
  };

  return (
    <Card
      className="p-4 h-full"
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        border: "1px solid rgb(209, 213, 219)",
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5" style={{ color: "rgb(14, 165, 233)" }} />
        <h3 className="font-semibold" style={{ color: "rgb(15, 23, 42)" }}>
          Mis Apuntes
        </h3>
        <Badge
          variant="secondary"
          className="ml-auto"
          style={{
            backgroundColor: "rgb(240, 249, 255)",
            color: "rgb(14, 165, 233)",
          }}
        >
          {notes.length}
        </Badge>
      </div>

      {/* Add new note */}
      <div className="space-y-2 mb-4">
        <Textarea
          placeholder="Escribe un apunte sobre esta clase..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="min-h-[80px] resize-none"
          style={{
            borderColor: "rgb(209, 213, 219)",
            backgroundColor: "rgb(255, 255, 255)",
          }}
        />
        <Button
          onClick={handleAddNote}
          disabled={!newNote.trim()}
          className="w-full"
          size="sm"
          style={{
            backgroundColor: newNote.trim()
              ? "rgb(14, 165, 233)"
              : "rgb(209, 213, 219)",
            color: "rgb(255, 255, 255)",
            borderColor: newNote.trim()
              ? "rgb(14, 165, 233)"
              : "rgb(209, 213, 219)",
          }}
        >
          <Plus className="w-4 h-4 mr-2" />
          Agregar Apunte
        </Button>
      </div>

      {/* Notes list */}
      <ScrollArea className="h-[300px]">
        <div className="space-y-3">
          {notes.length === 0 ? (
            <div
              className="text-center py-8"
              style={{ color: "rgb(100, 116, 139)" }}
            >
              <BookOpen
                className="w-8 h-8 mx-auto mb-2"
                style={{ color: "rgb(209, 213, 219)" }}
              />
              <p className="text-sm">Aún no tienes apuntes</p>
              <p className="text-xs" style={{ color: "rgb(100, 116, 139)" }}>
                Agrega tu primer apunte arriba
              </p>
            </div>
          ) : (
            notes.map((note) => (
              <Card
                key={note.id}
                className="p-3"
                style={{
                  backgroundColor: "rgb(249, 250, 251)",
                  border: "1px solid rgb(209, 213, 219)",
                }}
              >
                {editingNote === note.id ? (
                  <div className="space-y-2">
                    <Textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="min-h-[60px] resize-none text-sm"
                      style={{
                        borderColor: "rgb(209, 213, 219)",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    />
                    <div className="flex gap-2">
                      <Button
                        onClick={handleSaveEdit}
                        size="sm"
                        className="flex-1"
                        style={{
                          backgroundColor: "rgb(14, 165, 233)",
                          color: "rgb(255, 255, 255)",
                        }}
                      >
                        <Save className="w-3 h-3 mr-1" />
                        Guardar
                      </Button>
                      <Button
                        onClick={handleCancelEdit}
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        style={{
                          borderColor: "rgb(209, 213, 219)",
                          color: "rgb(71, 85, 105)",
                          backgroundColor: "rgb(255, 255, 255)",
                        }}
                      >
                        <X className="w-3 h-3 mr-1" />
                        Cancelar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p
                      className="text-sm mb-2"
                      style={{ color: "rgb(71, 85, 105)" }}
                    >
                      {note.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <div
                        className="flex items-center gap-2 text-xs"
                        style={{ color: "rgb(100, 116, 139)" }}
                      >
                        <span>{note.timestamp}</span>
                        {note.videoTime && (
                          <>
                            <span>•</span>
                            <span>En el minuto {note.videoTime}</span>
                          </>
                        )}
                      </div>
                      <div className="flex gap-1">
                        <Button
                          onClick={() => handleStartEdit(note)}
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0"
                          style={{ color: "rgb(71, 85, 105)" }}
                        >
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button
                          onClick={() => onDeleteNote(note.id)}
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0"
                          style={{ color: "rgb(239, 68, 68)" }}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </Card>
            ))
          )}
        </div>
      </ScrollArea>
    </Card>
  );
};
