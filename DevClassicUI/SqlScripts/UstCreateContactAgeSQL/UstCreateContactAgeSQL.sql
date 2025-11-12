CREATE OR REPLACE view public."UsrVwContactAgeDays3"
AS 
SELECT 
	"Id" AS "UsrId",
	"Name" AS "UsrName",
	"BirthDate" AS "UsrBirthDate",
	CURRENT_DATE - "BirthDate" AS "UsrAgeDays"
FROM public."Contact"