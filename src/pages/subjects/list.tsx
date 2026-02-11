import {Breadcrumb} from "@/components/ui/breadcrumb.tsx";
import {ListView} from "@/components/refine-ui/views/list-view.tsx";
import { Search} from "lucide-react";
import { SetStateAction, useMemo, useState } from 'react';
import {SelectContent, Select,SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.tsx';
import {DEPARTMENT_OPTIONS} from "@/constants";
import {CreateButton} from "@/components/refine-ui/buttons/create.tsx";
import {DataTable} from "@/components/refine-ui/data-table/data-table.tsx";
import {useTable} from "@refinedev/react-table";
import {Subject} from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";


const Subjectlist=()=>{
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const departmentFilters = selectedDepartment==='all'?[]:[
      {field:'department',operator:'eq' as const, value:selectedDepartment}
  ]
    const searchFilters=searchQuery ? [
        {field:"name", operator:"contains" as const, value:searchQuery }
    ]:[];

  const subjectTable = useTable<Subject>({
      columns: useMemo<ColumnDef<Subject>[]>(()=>[
          {
              id: "code",
              accessorKey: "code",
              size:100,
              header:()=><p className="column-title ml-2">Code</p>,
              cell:({getValue})=> <Badge>{getValue<string>()}</Badge>
          },
          {
              id: "name",
              accessorKey: "name",
              size:200,
              header:()=><p className="column-title">Name</p>,
              cell:({getValue})=> <span className="text-foreground">{getValue<string>()}</span>,
              filterFn:'includesString'
          },
          {
              id: "department",
          accessorKey: "department",
          size:150,
          header:()=><p className="column-title">Department</p>,
          cell:({getValue})=> <Badge>{getValue<string>()}</Badge>},
          {
              id:"description",
              accessorKey: "description",
              size:450,
              header:()=><p className="column-title">Description</p>,
              cell:({getValue})=> <span className="truncate,line-clamp-2">{getValue<string>()}</span>
          }
      ],[]),
      refineCoreProps:{
          resource:"subjects",
          pagination:{ pageSize: 10,mode:"server"},
          filters:{
              permanent:[]
          },
          sorters:{
              initial:[
                  {field: "id", order:"desc",}
              ]
          }
      }

  });
  return(
    <ListView>
        <Breadcrumb />

        <h1 className="page-title">Subjects</h1>


        <div className="intro-row">
            <p>Quick access to essential metrics and management tools.</p>
        </div>

      <div className="action-row">
        <div className="search-field">
            <Search className="search-icon" />

            <input
            type="text"
            placeholder="Search by name"
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            />
          <div className="flex gap w-full sm:w-auto">
              <Select
                  value={selectedDepartment}
                  onValueChange={(value) => setSelectedDepartment(value)}
              >
                  <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Filter by department" />
                  </SelectTrigger>

                  <SelectContent>
                      <SelectItem value="all">All Department</SelectItem>

                      {DEPARTMENT_OPTIONS.map((department) => (
                          <SelectItem
                              key={department.value}
                              value={department.value}
                          >
                              {department.label}
                          </SelectItem>
                      ))}
                  </SelectContent>
              </Select>


              <CreateButton />
          </div>

        </div>
      </div>

        <DataTable table={subjectTable}/>
    </ListView>
  )
}
export  default Subjectlist