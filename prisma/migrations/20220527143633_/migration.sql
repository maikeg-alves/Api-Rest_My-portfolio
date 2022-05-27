-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "name_project" TEXT NOT NULL,
    "date_create_project" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "linkrepo" TEXT NOT NULL,
    "executiontime" INTEGER NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "img" TEXT NOT NULL,
    "gif" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "technogys" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "technogys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technology" (
    "id" TEXT NOT NULL,
    "id_project" TEXT NOT NULL,
    "id_technology" TEXT NOT NULL,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ability" INTEGER NOT NULL,
    "goodhabits" INTEGER NOT NULL,
    "experience" INTEGER NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "projects_name_project_key" ON "projects"("name_project");

-- CreateIndex
CREATE UNIQUE INDEX "technogys_name_key" ON "technogys"("name");

-- CreateIndex
CREATE UNIQUE INDEX "skills_name_key" ON "skills"("name");

-- AddForeignKey
ALTER TABLE "Technology" ADD CONSTRAINT "Technology_id_project_fkey" FOREIGN KEY ("id_project") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Technology" ADD CONSTRAINT "Technology_id_technology_fkey" FOREIGN KEY ("id_technology") REFERENCES "technogys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
