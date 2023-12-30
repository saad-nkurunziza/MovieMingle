import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
export default function FilterCard(){
	return(
<Card className="mb-6">
        <CardHeader>
          <CardTitle>Filter</CardTitle>
          <CardDescription>
            Filter by genre, release year, rating, or search for a specific
            movie.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="genre">Genre</Label>
            <Select>
              <SelectTrigger className="w-60">Select Genre</SelectTrigger>
              <SelectContent>
                <SelectItem value="action">Action</SelectItem>
                <SelectItem value="comedy">Comedy</SelectItem>
                <SelectItem value="drama">Drama</SelectItem>
                <SelectItem value="fantasy">Fantasy</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="year">Release Year</Label>
            <Select>
              <SelectTrigger className="w-60">Select Year</SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="rating">Rating</Label>
            <Select>
              <SelectTrigger className="w-60">Select Rating</SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-3">
            <Label htmlFor="search">Search</Label>
            <Input id="search" placeholder="Search for a movie" />
          </div>
        </CardContent>
      </Card>
	)
}