from rest_framework.views import APIView
from .serializers import StudentSerializer
from django.http.response import JsonResponse
from .models import Student
from django.http.response import Http404
from rest_framework.response import Response


class StudentView(APIView):

    def post (self, request):
        data = request.data 
        serializer = StudentSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Student Created Succesfuly', safe=False)
        
        return JsonResponse('Failed to add Student', safe=False)
    

    def get_student(self, pk):
        try:
            student = Student.objects.get(studentId=pk)
            return student
        except Student.DoesNotExist():
            raise Http404
        
    def get(self, request, pk=None):
        if pk:
            data =self.get_student(pk)
            serializer =StudentSerializer(data)
        else:
            data = Student.objects.all()
            serializer = StudentSerializer(data, many=True)

        return Response(serializer.data)